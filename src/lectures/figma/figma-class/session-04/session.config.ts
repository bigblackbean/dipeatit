import type { SessionConfig } from "../../../types";
import { PROTOTYPE_MATERIAL_URL, prototypeLessonSlides } from "./slides";

export const sessionConfig: SessionConfig = {
  id: "session-04",
  session: 4,
  title: "Figma 프로토타입 제작",
  releaseDate: "2026-09-12",
  accessCode: "FIGMA0912",
  attachments: [{
    name: "4회차 프로토타입 실습 파일 (Figma)",
    url: PROTOTYPE_MATERIAL_URL,
  }],
  sections: prototypeLessonSlides.map(({ id, title }) => ({ id, title })),
};
