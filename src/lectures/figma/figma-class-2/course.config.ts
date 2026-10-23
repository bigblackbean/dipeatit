import type { CourseConfig } from "../../types";
import { sessionConfig as session1 } from "./session-01/session.config";
import { sessionConfig as session2 } from "./session-02/session.config";
import { sessionConfig as session3 } from "./session-03/session.config";
import { sessionConfig as session4 } from "./session-04/session.config";
import { sessionConfig as session5 } from "./session-05/session.config";

export const courseConfig: CourseConfig = {
  id: "261024261121_figma",
  categoryId: "figma",
  categoryName: "피그마",
  title: "피그마 강의 2기",
  startDate: "2026-10-24",
  endDate: "2026-11-21",
  studentAccount: { id: "figma2", password: "figma123" },
  sessions: [session1, session2, session3, session4, session5],
};
