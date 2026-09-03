import type { CourseConfig } from "../../types";
import { sessionConfig as session01 } from "./session-01/session.config";
import { sessionConfig as session02 } from "./session-02/session.config";
import { sessionConfig as session03 } from "./session-03/session.config";
import { sessionConfig as session04 } from "./session-04/session.config";
import { sessionConfig as session05 } from "./session-05/session.config";
import { sessionConfig as session06 } from "./session-06/session.config";
import { sessionConfig as session07 } from "./session-07/session.config";
import { sessionConfig as session08 } from "./session-08/session.config";
import { sessionConfig as session09 } from "./session-09/session.config";
import { sessionConfig as session10 } from "./session-10/session.config";
import { sessionConfig as session11 } from "./session-11/session.config";
import { sessionConfig as session12 } from "./session-12/session.config";
import { sessionConfig as session13 } from "./session-13/session.config";

export const courseConfig: CourseConfig = {
  id: "260803260907_full_ai_design",
  categoryId: "ai-design",
  categoryName: "AI / AI Design",
  title: "[FULL AI 디자인] 생성형 AI 광고 콘텐츠 제작",
  startDate: "2026-08-03",
  endDate: "2026-09-07",
  totalHours: 39,
  studentAccount: { id: "fullai", password: "fullai2026" },
  sessions: [session01, session02, session03, session04, session05, session06, session07, session08, session09, session10, session11, session12, session13],
};
