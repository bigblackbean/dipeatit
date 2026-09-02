import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "04회차",
  "title": "한 장 기획서의 구조",
  "summary": "좋은 기획서는 무엇을, 누구에게, 왜 보여주는지 답합니다.",
  "kind": "cards",
  "points": [
    "Problem: 고객의 문제",
    "Promise: 제품의 약속",
    "Proof: 믿을 이유"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
