import { courses, findCourse } from "./registry";
import type { CourseConfig, SessionConfig } from "./types";

export type Role = "admin" | "student";
export type SessionInfo = { role: "admin" } | { role: "student"; courseId: string };
export const SESSION_KEY = "dipeatit-session";
export const ADMIN = { id: "admin", password: "admin1234" };

export function localDateKey(date = new Date()) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

export function authenticate(id: string, password: string): SessionInfo | null {
  if (id === ADMIN.id && password === ADMIN.password) return { role: "admin" };
  const course = courses.find(item => item.studentAccount.id === id && item.studentAccount.password === password);
  return course ? { role: "student", courseId: course.id } : null;
}

export function restoreSession(raw: string | null): SessionInfo | null {
  if (!raw) return null;
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || !("role" in data)) return null;
    if (data.role === "admin") return { role: "admin" };
    if (data.role !== "student") return null;
    // Before multiple courses were supported, the only student session was FULL AI.
    const courseId = "courseId" in data ? data.courseId : courses[0].id;
    return typeof courseId === "string" && findCourse(courseId) ? { role: "student", courseId } : null;
  } catch {
    return null;
  }
}

export function accessKey(courseId: string, sessionId: string) {
  return `lecture-access:${courseId}:${sessionId}`;
}

export function canOpenSession(
  auth: SessionInfo,
  course: CourseConfig,
  session: SessionConfig,
  hasAccess: (key: string) => boolean,
  today = localDateKey(),
) {
  if (!course.sessions.includes(session)) return false;
  if (auth.role === "admin") return true;
  if (auth.courseId !== course.id) return false;
  return session.releaseDate <= today || hasAccess(accessKey(course.id, session.id));
}

export function resolveViewerLocation(
  auth: SessionInfo,
  params: URLSearchParams,
  hasAccess: (key: string) => boolean,
  today = localDateKey(),
) {
  const courseId = params.get("course") ?? (auth.role === "student" ? auth.courseId : courses[0].id);
  const course = findCourse(courseId);
  if (!course) return null;
  const session = course.sessions.find(item => item.id === params.get("session"));
  if (!session || !canOpenSession(auth, course, session, hasAccess, today)) return null;
  const requested = Number(params.get("section") ?? 1);
  const index = Number.isFinite(requested) ? Math.max(0, Math.min(session.sections.length - 1, Math.trunc(requested) - 1)) : 0;
  return { course, session, index };
}

