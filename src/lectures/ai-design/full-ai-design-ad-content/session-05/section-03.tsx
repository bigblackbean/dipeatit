import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "05회차",
  "title": "참조 이미지로 방향 맞추기",
  "summary": "그대로 복제하지 않고 구도·빛·분위기를 언어로 분해합니다.",
  "kind": "practice",
  "points": [
    "좋은 요소 3개 찾기",
    "스타일 키워드로 변환",
    "새로운 제품 맥락에 적용"
  ],
  "tools": [
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
