import { courseSlides as aiSlides } from "./ai-design/full-ai-design-ad-content/course.slides";
import { courseSlides as figmaSlides } from "./figma/figma-class/course.slides";
import { courses } from "./registry";
import type { SlideComponent } from "./types";

export const slidesByCourse: Record<string, Record<string, SlideComponent[]>> = {
  [courses[0].id]: aiSlides,
  [courses[1].id]: figmaSlides,
};

