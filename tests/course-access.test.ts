import assert from "node:assert/strict";
import { test } from "node:test";
import { categories, courses } from "../src/lectures/registry";
import { accessKey, authenticate, canOpenSession, resolveViewerLocation, restoreSession } from "../src/lectures/access";

const ai = courses.find(course => course.categoryId === "ai-design")!;
const figma = courses.find(course => course.categoryId === "figma")!;
const today = "2026-09-03";
const noAccess = () => false;

test("Figma category, schedule, and credentials are registered without replacing FULL AI", () => {
  assert.equal(categories.find(category => category.id === "figma")?.count, 1);
  assert.equal(ai.sessions.length, 13);
  assert.equal(ai.totalHours, 39);
  assert.equal(figma.title, "피그마 강의");
  assert.equal(figma.totalHours, undefined);
  assert.equal(figma.startDate, "2026-08-22");
  assert.equal(figma.endDate, "2026-09-19");
  assert.deepEqual(figma.sessions.map(session => session.releaseDate), ["2026-08-22", "2026-08-30", "2026-09-05", "2026-09-12", "2026-09-19"]);
  assert.deepEqual(figma.sessions.map(session => session.session), [1, 2, 3, 4, 5]);
  assert.equal(new Set(courses.map(course => course.id)).size, courses.length);
});

test("each login resolves its own course and rejects incorrect passwords", () => {
  assert.deepEqual(authenticate("figma", "figma123"), { role: "student", courseId: figma.id });
  assert.deepEqual(authenticate("fullai", "fullai2026"), { role: "student", courseId: ai.id });
  assert.deepEqual(authenticate("admin", "admin1234"), { role: "admin" });
  assert.equal(authenticate("figma", "fullai2026"), null);
  assert.equal(authenticate("unknown", "figma123"), null);
});

test("stored Figma sessions survive reload; legacy sessions retain FULL AI", () => {
  const login = authenticate("figma", "figma123")!;
  assert.deepEqual(restoreSession(JSON.stringify(login)), login);
  assert.deepEqual(restoreSession('{"role":"student"}'), { role: "student", courseId: ai.id });
  assert.equal(restoreSession('{"role":"student","courseId":"missing"}'), null);
  assert.equal(restoreSession('{"role":"invalid"}'), null);
  assert.equal(restoreSession("broken-json"), null);
  assert.equal(restoreSession("null"), null);
});

test("access is course-scoped even when two courses share session IDs", () => {
  const login = authenticate("figma", "figma123")!;
  const first = figma.sessions[0];
  const future = figma.sessions[2];
  assert.equal(canOpenSession(login, figma, first, noAccess, today), true);
  assert.equal(canOpenSession(login, figma, future, noAccess, today), false);
  assert.equal(canOpenSession(login, figma, future, noAccess, "2026-09-05"), true);
  assert.notEqual(accessKey(ai.id, future.id), accessKey(figma.id, future.id));
  assert.equal(canOpenSession(login, figma, future, key => key === accessKey(ai.id, future.id), today), false);
  assert.equal(canOpenSession(login, figma, future, key => key === accessKey(figma.id, future.id), today), true);
  assert.equal(canOpenSession(login, ai, ai.sessions[0], () => true, today), false);
  assert.equal(canOpenSession(login, figma, ai.sessions[0], () => true, today), false);
  assert.equal(canOpenSession({ role: "admin" }, figma, future, noAccess, today), true);
});

test("viewer URLs restore the correct course, reject cross-course access, and clamp sections", () => {
  const login = authenticate("figma", "figma123")!;
  const params = new URLSearchParams({ course: figma.id, session: "session-01", section: "99" });
  const location = resolveViewerLocation(login, params, noAccess, today)!;
  assert.equal(location.course.id, figma.id);
  assert.equal(location.index, 0);
  params.set("section", "not-a-number");
  assert.equal(resolveViewerLocation(login, params, noAccess, today)?.index, 0);
  params.set("course", ai.id);
  assert.equal(resolveViewerLocation(login, params, () => true, today), null);
  assert.equal(resolveViewerLocation({ role: "admin" }, params, noAccess, today)?.course.id, ai.id);
  params.set("course", figma.id);
  params.set("session", "session-05");
  assert.equal(resolveViewerLocation(login, params, noAccess, today), null);
  assert.equal(resolveViewerLocation(login, params, () => true, today)?.session.id, "session-05");
  assert.equal(resolveViewerLocation({ role: "admin" }, params, noAccess, today)?.course.id, figma.id);
  params.set("course", "missing");
  assert.equal(resolveViewerLocation({ role: "admin" }, params, noAccess, today), null);
});
