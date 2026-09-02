import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "10회차",
  "title": "브랜드 프롬프트 시스템화",
  "summary": "바뀌는 요소와 고정 요소를 분리해 재사용하세요.",
  "kind": "practice",
  "points": [
    "브랜드 고정 문장",
    "제품·매체 변수",
    "금지 요소와 검수 기준"
  ],
  "tools": [
    "Gemini",
    "Nano Banana"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
