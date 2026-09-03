import { courseConfig as aiCourse } from "./ai-design/full-ai-design-ad-content/course.config";
import { courseConfig as figmaCourse } from "./figma/figma-class/course.config";
import type { CourseConfig } from "./types";

export const courses: CourseConfig[] = [aiCourse, figmaCourse];
export const categories = [
  { id: "ai-design", name: "AI / AI Design", tone: "blue" },
  { id: "figma", name: "피그마", tone: "pink" },
  { id: "ad", name: "광고콘텐츠", tone: "pink" },
  { id: "publishing", name: "웹퍼블리싱", tone: "purple" },
  { id: "react", name: "React", tone: "mint" },
].map(category => ({
  ...category,
  count: courses.filter(course => course.categoryId === category.id).length,
}));

export function findCourse(id: string) {
  return courses.find(course => course.id === id);
}

