import type { SessionConfig } from "../../../types";

export const sessionConfig: SessionConfig = {
  id: "session-01",
  session: 1,
  title: "오리엔테이션 / 생성형 AI 개념 이해",
  releaseDate: "2026-08-03",
  accessCode: "AI0803",
  attachments: [
    {
      name: "1회차 오리엔테이션 자료",
      url: "https://drive.google.com/drive/folders/1c48t9_wcQbN2pV-u8jNrLqXKag_ikCRy",
    },
  ],
  sections: [
    {
      id: "section-01",
      title: "생성형 AI와 첫 만남",
    },
    {
      id: "section-02",
      title: "생성형 AI, 무엇이 다른가요?",
    },
    {
      id: "section-03",
      title: "첫 실습 체크리스트",
    },
  ],
};
