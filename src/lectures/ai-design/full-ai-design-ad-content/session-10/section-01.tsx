import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "10회차",
  "title": "반복 가능한 브랜드 만들기",
  "summary": "한 번의 좋은 이미지보다 일관된 선택 기준을 설계합니다.",
  "kind": "cover",
  "points": [
    "브랜드 핵심",
    "톤앤매너 지침",
    "프롬프트 시스템"
  ],
  "tools": [
    "Gemini",
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
