import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { authenticate, canOpenSession, resolveViewerLocation, restoreSession, accessKey } from "../src/lectures/access";
import { courses } from "../src/lectures/registry";
import { courseConfig as course } from "../src/lectures/figma/figma-class-2/course.config";
import { introSlides } from "../src/lectures/figma/figma-class-2/session-01/slides";

const dates = ["2026-10-24", "2026-10-31", "2026-11-07", "2026-11-14", "2026-11-21"];
const login = authenticate("figma2", "figma123")!;

test("second Figma cohort has its own account and all five requested release dates", () => {
  assert.ok(courses.includes(course));
  assert.deepEqual(login, { role: "student", courseId: course.id });
  assert.deepEqual(restoreSession(JSON.stringify(login)), login);
  assert.equal(authenticate("figma2", "incorrect"), null);
  assert.deepEqual(course.sessions.map(session => session.releaseDate), dates);
  assert.deepEqual(course.sessions.map(session => session.session), [1, 2, 3, 4, 5]);
  assert.equal(course.startDate, dates[0]);
  assert.equal(course.endDate, dates[4]);
});

test("each lesson unlocks on its date and the first cohort cannot access the second", () => {
  const original = courses.find(item => item.studentAccount.id === "figma")!;
  course.sessions.forEach((session, index) => {
    const before = new Date(`${dates[index]}T12:00:00Z`);
    before.setUTCDate(before.getUTCDate() - 1);
    assert.equal(canOpenSession(login, course, session, () => false, before.toISOString().slice(0, 10)), false);
    assert.equal(canOpenSession(login, course, session, () => false, dates[index]), true);
    assert.equal(canOpenSession({ role: "admin" }, course, session, () => false, "2026-10-01"), true);
    assert.equal(canOpenSession({ role: "student", courseId: original.id }, course, session, () => true, dates[index]), false);
    assert.equal(canOpenSession(login, course, session, key => key === accessKey(original.id, session.id), "2026-10-01"), false);
  });
  assert.equal(canOpenSession(login, original, original.sessions[0], () => true, dates[4]), false);
});

test("HTML lesson retains all 50 PDF pages, prompts, examples, and source figures", () => {
  assert.equal(introSlides.length, 50);
  assert.equal(course.sessions[0].sections.length, 50);
  introSlides.forEach((slide, index) => {
    assert.equal(slide.sourcePage, index + 1);
    assert.deepEqual(course.sessions[0].sections[index], { id: slide.id, title: slide.title });
    assert.ok(slide.body.length);
    slide.images.forEach(image => assert.ok(existsSync(join(process.cwd(), "public", image))));
  });
  assert.ok(introSlides[29].body.join(" ").includes("한 번에 하나씩"));
  assert.ok(introSlides[38].body.join(" ").includes("왼쪽은 카피 여백"));
  assert.ok(introSlides[39].body.join(" ").includes("세로 4:5"));
  assert.equal(introSlides[3].images.length, 2);
  assert.equal(introSlides[48].body.length, 6);
  assert.equal(introSlides[49].body.length, 6);
});

test("direct links enforce release dates and restore the last of 50 HTML slides", () => {
  const params = new URLSearchParams({ course: course.id, session: "session-01", section: "50" });
  assert.equal(resolveViewerLocation(login, params, () => false, "2026-10-23"), null);
  assert.equal(resolveViewerLocation(login, params, () => false, dates[0])?.index, 49);
  params.set("section", "999");
  assert.equal(resolveViewerLocation(login, params, () => false, dates[0])?.index, 49);
  params.set("session", "session-02");
  assert.equal(resolveViewerLocation(login, params, () => false, dates[0]), null);
  assert.equal(resolveViewerLocation(login, params, () => false, dates[1])?.index, 0);
});
