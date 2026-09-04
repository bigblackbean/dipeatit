import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { imageLessonSlides } from "../src/lectures/ai-design/full-ai-design-ad-content/session-13/slides";
import { sessionConfig } from "../src/lectures/ai-design/full-ai-design-ad-content/session-13/session.config";

test("session 13 contains all 37 source slides and preserves its release settings", () => {
  assert.equal(imageLessonSlides.length, 37);
  assert.equal(sessionConfig.releaseDate, "2026-09-07");
  assert.equal(sessionConfig.accessCode, "AI0907");
  assert.equal(sessionConfig.sections.length, 37);
  const directory = join(process.cwd(), "src/lectures/ai-design/full-ai-design-ad-content/session-13");
  const page = readFileSync(join(directory, "page.tsx"), "utf8");
  imageLessonSlides.forEach((slide, index) => {
    const number = String(index + 1).padStart(2, "0");
    assert.equal(slide.id, `section-${number}`);
    assert.deepEqual(sessionConfig.sections[index], { id: slide.id, title: slide.title });
    assert.ok(page.includes(`import { Section${number} } from "./${slide.id}"`));
    assert.ok(readFileSync(join(directory, `${slide.id}.tsx`), "utf8").includes(`imageLessonSlides[${index}]`));
  });
});

test("all comparison assets and ten teaching prompts are available", () => {
  const assets = new Set<string>();
  for (const slide of imageLessonSlides) {
    for (const image of slide.images) {
      assert.ok(image.alt);
      assert.ok(image.src.startsWith("/lectures/full-ai/session-13/"));
      assert.ok(existsSync(join(process.cwd(), "public", image.src)));
      assets.add(image.src);
    }
    if (slide.kind === "prompt") {
      assert.ok(slide.vague && slide.prompt && slide.summary && slide.body.length);
    }
  }
  assert.equal(assets.size, 14);
  assert.equal(imageLessonSlides.filter(slide => slide.kind === "prompt").length, 10);
  assert.equal(imageLessonSlides[30].kind, "template");
  assert.ok(imageLessonSlides[30].prompt?.includes("[유지할 것]"));
  assert.ok(imageLessonSlides[3].note?.includes("통제 실험이 아닙니다"));
  assert.ok(imageLessonSlides[16].note?.includes("보장하지 않습니다"));
});
