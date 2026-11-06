import type { SessionConfig } from "../../../types";
import { sessionConfig as prototypeSession } from "../../figma-class/session-04/session.config";

export const sessionConfig: SessionConfig = {
  ...prototypeSession,
  id: "session-03",
  session: 3,
  releaseDate: "2026-11-07",
  accessCode: "FIGMA21107",
  attachments: prototypeSession.attachments.map(attachment => ({
    ...attachment,
    name: "3회차 프로토타입 실습 파일 (Figma)",
  })),
};
