import assert from "node:assert/strict";
import { test } from "node:test";
import { authenticate, resolveViewerLocation } from "../src/lectures/access";
import { sessionConfig } from "../src/lectures/figma/figma-class/session-04/session.config";
import { PROTOTYPE_MATERIAL_URL, prototypeLessonSlides } from "../src/lectures/figma/figma-class/session-04/slides";

test("Figma session 4 registers the prototype lesson and supplied material", () => {
  assert.equal(prototypeLessonSlides.length, 45);
  assert.equal(sessionConfig.sections.length, prototypeLessonSlides.length);
  assert.equal(sessionConfig.releaseDate, "2026-09-12");
  assert.equal(sessionConfig.accessCode, "FIGMA0912");
  assert.equal(sessionConfig.attachments[0].url, PROTOTYPE_MATERIAL_URL);
  assert.ok(PROTOTYPE_MATERIAL_URL.includes("node-id=43-557"));
  assert.equal(new Set(prototypeLessonSlides.map(slide => slide.id)).size, 45);
  assert.ok(prototypeLessonSlides.some(slide => slide.title === "Smart Animate"));
  assert.ok(prototypeLessonSlides.some(slide => slide.title === "Interactive Component"));
});

test("Figma students can open the last session 4 slide from its release date", () => {
  const login = authenticate("figma", "figma123")!;
  const params = new URLSearchParams({ course: "260822260919_figma", session: "session-04", section: "45" });
  assert.equal(resolveViewerLocation(login, params, () => false, "2026-09-11"), null);
  assert.equal(resolveViewerLocation(login, params, () => false, "2026-09-12")?.index, 44);
});
