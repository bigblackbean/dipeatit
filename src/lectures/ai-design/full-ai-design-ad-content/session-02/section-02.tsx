import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "02회차",
  "title": "리서치 질문의 3가지 렌즈",
  "summary": "같은 주제도 관점을 나누면 더 구체적인 답을 얻을 수 있습니다.",
  "kind": "cards",
  "points": [
    "시장: 무엇이 변했나",
    "고객: 왜 선택하나",
    "경쟁: 무엇이 비었나"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
