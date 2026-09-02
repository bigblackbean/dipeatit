import type { SlideComponent } from "../../types";
import { sections as session01 } from "./session-01/page";
import { sections as session02 } from "./session-02/page";
import { sections as session03 } from "./session-03/page";
import { sections as session04 } from "./session-04/page";
import { sections as session05 } from "./session-05/page";
import { sections as session06 } from "./session-06/page";
import { sections as session07 } from "./session-07/page";
import { sections as session08 } from "./session-08/page";
import { sections as session09 } from "./session-09/page";
import { sections as session10 } from "./session-10/page";
import { sections as session11 } from "./session-11/page";
import { sections as session12 } from "./session-12/page";
import { sections as session13 } from "./session-13/page";

export const courseSlides: Record<string, SlideComponent[]> = {
  "session-01": session01,
  "session-02": session02,
  "session-03": session03,
  "session-04": session04,
  "session-05": session05,
  "session-06": session06,
  "session-07": session07,
  "session-08": session08,
  "session-09": session09,
  "session-10": session10,
  "session-11": session11,
  "session-12": session12,
  "session-13": session13,
};
