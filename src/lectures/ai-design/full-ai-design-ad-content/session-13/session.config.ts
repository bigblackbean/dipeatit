import type { SessionConfig } from "../../../types";
import { imageLessonSlides } from "./slides";

export const sessionConfig: SessionConfig = {
  id: "session-13",
  session: 13,
  title: "생성형 AI로 원하는 이미지 만들기",
  releaseDate: "2026-09-07",
  accessCode: "AI0907",
  attachments: [{ name: "13회차 최종 검수표", url: "" }],
  sections: imageLessonSlides.map(({ id, title }) => ({ id, title })),
};
