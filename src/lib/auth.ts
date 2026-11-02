import crypto from "crypto";
import { getDB } from "./db";

const SESSION_COOKIE = "sid";
const SESSION_DAYS = 30;

export function hashPassword(pw: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(pw, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(pw: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const h = crypto.scryptSync(pw, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(h), Buffer.from(hash));
}

export function createSession(userId: number): string {
  const db = getDB();
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(
    Date.now() + SESSION_DAYS * 86400000
  ).toISOString();
  db.prepare(
    "INSERT INTO sessions (token, userId, expiresAt) VALUES (?, ?, ?)"
  ).run(token, userId, expiresAt);
  return token;
}

export function destroySession(token: string) {
  getDB().prepare("DELETE FROM sessions WHERE token = ?").run(token);
}

export function getUserBySession(token?: string): any | null {
  if (!token) return null;
  const db = getDB();
  const row = db
    .prepare(
      "SELECT u.* FROM sessions s JOIN users u ON u.id = s.userId WHERE s.token = ? AND s.expiresAt > datetime('now')"
    )
    .get(token) as any;
  return row || null;
}

export const COOKIE = SESSION_COOKIE;
