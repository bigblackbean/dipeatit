import { courseSlides as aiSlides } from "./ai-design/full-ai-design-ad-content/course.slides";
import { courseSlides as figmaSlides } from "./figma/figma-class/course.slides";
import { courseSlides as figma2Slides } from "./figma/figma-class-2/course.slides";
import { courseConfig as figma2Course } from "./figma/figma-class-2/course.config";
import { courses } from "./registry";
import type { SlideComponent } from "./types";

export const slidesByCourse: Record<string, Record<string, SlideComponent[]>> = {
  [courses[0].id]: aiSlides,
  [courses[1].id]: figmaSlides,
  [figma2Course.id]: figma2Slides,
};

