import type { SessionConfig } from "../../../types";
import { introSlides } from "./slides";

export const sessionConfig: SessionConfig = {
  id: "session-01",
  session: 1,
  title: "UI·UX와 Figma 기초, AI를 활용한 쇼핑 앱 만들기",
  releaseDate: "2026-10-24",
  accessCode: "FIGMA21024",
  attachments: [{
    name: "1회차 수업자료 (Google Drive)",
    url: "https://drive.google.com/drive/folders/1vgGC4HtdxzpkU0BcgoJW4dCE2h4edERc",
  }],
  sections: introSlides.map(({ id, title }) => ({ id, title })),
};
