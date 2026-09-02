import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "02회차",
  "title": "근거 있는 광고의 시작",
  "summary": "시장·소비자·경쟁사를 살펴보고 좋은 질문을 설계합니다.",
  "kind": "cover",
  "points": [
    "시장 흐름",
    "소비자 언어",
    "경쟁사 차별점"
  ],
  "tools": [
    "Gemini",
    "Perplexity"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
