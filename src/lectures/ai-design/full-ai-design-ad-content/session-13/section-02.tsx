import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "13회차",
  "title": "최종 검수의 6가지 기준",
  "summary": "보기에 좋은 것만으로는 충분하지 않습니다.",
  "kind": "cards",
  "points": [
    "저작권·오류·편향",
    "선정성·브랜드 일관성",
    "해상도·매체 규격"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
