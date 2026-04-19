/**
 * Runs every `*.sql` in `supabase/migrations/` (sorted by filename) against Postgres.
 *
 * Add to `.env.local` (do not commit):
 *   DATABASE_URL=postgresql://postgres.[ref]:[YOUR-PASSWORD]@aws-0-....pooler.supabase.com:5432/postgres
 *
 * Prefer the **Direct connection** string from Supabase Dashboard → Project Settings → Database.
 * The transaction pooler (:6543) can reject some DDL; direct :5432 is safest for migrations.
 */

const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("未找到 .env.local");
    process.exit(1);
  }
  const env = {};
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i <= 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    env[k] = v;
  }
  return env;
}

function mergeEnvLocal() {
  const local = loadEnvLocal();
  for (const [k, v] of Object.entries(local)) {
    if (process.env[k] === undefined) process.env[k] = v;
  }
}

function sslOption(connectionString) {
  try {
    const u = new URL(connectionString);
    if (u.hostname.endsWith("supabase.co")) {
      return { rejectUnauthorized: false };
    }
  } catch {
    /* ignore */
  }
  return undefined;
}

async function main() {
  mergeEnvLocal();
  const connectionString =
    process.env.DATABASE_URL || process.env.DIRECT_URL || "";
  if (!connectionString) {
    console.error(
      "请在 .env.local 中设置 DATABASE_URL（或 DIRECT_URL）：Supabase 控制台 → Database → Connection string → Direct。",
    );
    process.exit(1);
  }

  const migrationsDir = path.join(process.cwd(), "supabase", "migrations");
  if (!fs.existsSync(migrationsDir)) {
    console.error("未找到目录:", migrationsDir);
    process.exit(1);
  }

  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  if (files.length === 0) {
    console.error("supabase/migrations 下没有 .sql 文件");
    process.exit(1);
  }

  const client = new Client({
    connectionString,
    ssl: sslOption(connectionString),
  });

  await client.connect();
  try {
    for (const file of files) {
      const full = path.join(migrationsDir, file);
      const sql = fs.readFileSync(full, "utf8");
      console.log("执行:", file);
      await client.query(sql);
    }
  } finally {
    await client.end();
  }

  console.log("完成：已按顺序执行", files.length, "个迁移文件。");
}

main().catch((err) => {
  console.error("失败:", err.message);
  process.exit(1);
});
