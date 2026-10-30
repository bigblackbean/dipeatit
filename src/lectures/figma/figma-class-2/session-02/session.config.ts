import type { SessionConfig } from "../../../types";
import { componentLessonSlides } from "./slides";

export const sessionConfig: SessionConfig = {
  id: "session-02",
  session: 2,
  title: "Component와 Instance",
  releaseDate: "2026-10-31",
  accessCode: "FIGMA21031",
  attachments: [{
    name: "Component · Instance 실습자료 (Google Drive)",
    url: "https://drive.google.com/drive/folders/1jAcV3Blv21vTG1xO1T7cQgf24I9xDbje",
  }],
  sections: componentLessonSlides.map(({ id, title }) => ({ id, title })),
};
