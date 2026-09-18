import assert from "node:assert/strict";
import test from "node:test";
import { sessionConfig } from "../src/lectures/figma/figma-class/session-05/session.config";
import { variablesLessonSlides } from "../src/lectures/figma/figma-class/session-05/slides";

test("Figma 5회차는 Variables 강의 슬라이드를 순서대로 제공한다", () => {
  assert.equal(variablesLessonSlides.length, 47);
  assert.equal(sessionConfig.sections.length, variablesLessonSlides.length);
  variablesLessonSlides.forEach((slide, index) => {
    assert.equal(slide.id, `section-${String(index + 1).padStart(2, "0")}`);
    assert.deepEqual(sessionConfig.sections[index], { id: slide.id, title: slide.title });
  });
});

test("Figma 5회차 일정과 접근 코드가 실제 강의 일정과 일치한다", () => {
  assert.equal(sessionConfig.releaseDate, "2026-09-19");
  assert.equal(sessionConfig.accessCode, "FIGMA0919");
  assert.deepEqual(sessionConfig.attachments, []);
});

test("Variables 핵심 개념과 실습 흐름을 모두 포함한다", () => {
  const lessonText = JSON.stringify(variablesLessonSlides);
  for (const keyword of ["Color", "Number", "String", "Boolean", "Collection", "Group", "Primitive", "Semantic", "Alias", "Mode", "Prototype", "Conditional"]) {
    assert.match(lessonText, new RegExp(keyword));
  }
  assert.match(lessonText, /Primitive → Semantic → Component → Screen/);
  assert.match(lessonText, /모바일 쇼핑앱/);
});
