import type { SessionConfig } from "../../../types";
import { sessionConfig as prototypeSession } from "../../figma-class/session-04/session.config";

export const PROTOTYPE_MATERIAL_URL = "https://www.figma.com/design/URe0l6yDzllZW04enQT7P3/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%A0%9C%EC%9E%91%EC%9A%A9_%EC%98%88%EC%8B%9C%EC%95%88?node-id=2005-79&t=XaeXyWggzkqX9FTe-1";

export const sessionConfig: SessionConfig = {
  ...prototypeSession,
  id: "session-03",
  session: 3,
  releaseDate: "2026-11-07",
  accessCode: "FIGMA21107",
  attachments: [{
    name: "3회차 프로토타입 실습 파일 (Figma)",
    url: PROTOTYPE_MATERIAL_URL,
  }],
};
