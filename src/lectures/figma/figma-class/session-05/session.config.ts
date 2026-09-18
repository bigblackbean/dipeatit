import type { SessionConfig } from "../../../types";
import { variablesLessonSlides } from "./slides";

export const sessionConfig: SessionConfig = {
  id: "session-05",
  session: 5,
  title: "Figma Variables와 디자인 시스템",
  releaseDate: "2026-09-19",
  accessCode: "FIGMA0919",
  attachments: [],
  sections: variablesLessonSlides.map(({ id, title }) => ({ id, title })),
};
