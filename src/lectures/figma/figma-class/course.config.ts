import type { CourseConfig } from "../../types";
import { sessionConfig as session1 } from "./session-01/session.config";
import { sessionConfig as session2 } from "./session-02/session.config";
import { sessionConfig as session3 } from "./session-03/session.config";
import { sessionConfig as session4 } from "./session-04/session.config";
import { sessionConfig as session5 } from "./session-05/session.config";

export const courseConfig: CourseConfig = {
  id: "260822260919_figma",
  categoryId: "figma",
  categoryName: "피그마",
  title: "피그마 강의",
  startDate: "2026-08-22",
  endDate: "2026-09-19",
  studentAccount: { id: "figma", password: "figma123" },
  sessions: [session1, session2, session3, session4, session5],
};
