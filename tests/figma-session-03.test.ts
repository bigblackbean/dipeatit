import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { componentLessonSlides } from "../src/lectures/figma/figma-class/session-03/slides";
import { sessionConfig } from "../src/lectures/figma/figma-class/session-03/session.config";
import { authenticate, resolveViewerLocation } from "../src/lectures/access";

test("Figma session 3 registers every PDF page in the same order", () => {
  assert.equal(componentLessonSlides.length, 40);
  assert.equal(sessionConfig.sections.length, 40);
  assert.equal(sessionConfig.releaseDate, "2026-09-05");
  assert.equal(sessionConfig.accessCode, "FIGMA0905");
  const directory = join(process.cwd(), "src/lectures/figma/figma-class/session-03");
  const page = readFileSync(join(directory, "page.tsx"), "utf8");
  componentLessonSlides.forEach((slide, index) => {
    const number = String(index + 1).padStart(2, "0");
    assert.equal(slide.sourcePage, index + 1);
    assert.equal(slide.id, `section-${number}`);
    assert.deepEqual(sessionConfig.sections[index], { id: slide.id, title: slide.title });
    assert.ok(page.includes(`import { Section${number} } from "./${slide.id}"`));
    assert.ok(readFileSync(join(directory, `${slide.id}.tsx`), "utf8").includes(`componentLessonSlides[${index}]`));
    assert.ok(slide.body.length);
  });
});

test("Figma materials point to the supplied folder and retain important lesson distinctions", () => {
  assert.equal(sessionConfig.attachments[0].url, "https://drive.google.com/drive/folders/1jAcV3Blv21vTG1xO1T7cQgf24I9xDbje");
  assert.ok(componentLessonSlides[16].body.some(line => line.includes("Boolean Property가 되지는 않는다")));
  assert.ok(componentLessonSlides[25].body.some(line => line.includes("추가 구현이 필요하다")));
  assert.ok(componentLessonSlides[28].body.some(line => line.includes("Component Instance로 준비")));
  assert.ok(componentLessonSlides[31].body.some(line => line.includes("추천 목록")));
  assert.equal(componentLessonSlides[37].kind, "shortcuts");
});

test("Figma students can reach slide 40 on the release date, but not before", () => {
  const login = authenticate("figma", "figma123")!;
  const params = new URLSearchParams({ course: "260822260919_figma", session: "session-03", section: "40" });
  assert.equal(resolveViewerLocation(login, params, () => false, "2026-09-04"), null);
  assert.equal(resolveViewerLocation(login, params, () => false, "2026-09-05")?.index, 39);
  params.set("section", "999");
  assert.equal(resolveViewerLocation(login, params, () => false, "2026-09-05")?.index, 39);
});
