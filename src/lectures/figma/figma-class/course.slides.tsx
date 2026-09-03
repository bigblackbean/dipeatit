import type { SlideComponent } from "../../types";
import { sections as session1 } from "./session-01/page";
import { sections as session2 } from "./session-02/page";
import { sections as session3 } from "./session-03/page";
import { sections as session4 } from "./session-04/page";
import { sections as session5 } from "./session-05/page";

export const courseSlides: Record<string, SlideComponent[]> = {
  "session-01": session1,
  "session-02": session2,
  "session-03": session3,
  "session-04": session4,
  "session-05": session5,
};
