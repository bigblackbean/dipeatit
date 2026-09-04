import type { SessionConfig } from "../../../types";
import { componentLessonSlides } from "./slides";

export const sessionConfig: SessionConfig = {
  id: "session-03",
  session: 3,
  title: "Figma Component와 Instance",
  releaseDate: "2026-09-05",
  accessCode: "FIGMA0905",
  attachments: [{
    name: "3회차 Component 수업자료 (Google Drive)",
    url: "https://drive.google.com/drive/folders/1jAcV3Blv21vTG1xO1T7cQgf24I9xDbje",
  }],
  sections: componentLessonSlides.map(({ id, title }) => ({ id, title })),
};
