import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "09회차",
  "title": "좋은 합성을 만드는 3가지 일치",
  "summary": "디테일보다 먼저 전체 장면의 규칙을 맞추세요.",
  "kind": "cards",
  "points": [
    "빛의 방향",
    "카메라 시점",
    "색감과 선명도"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
