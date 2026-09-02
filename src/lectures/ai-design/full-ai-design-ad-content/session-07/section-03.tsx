import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "07회차",
  "title": "AI 무드보드 만들기",
  "summary": "키워드를 시각 요소로 번역하고 한 화면에 정리하세요.",
  "kind": "practice",
  "points": [
    "키워드 3개 선정",
    "각 키워드별 이미지 탐색",
    "공통 패턴을 가이드로 기록"
  ],
  "tools": [
    "Gemini",
    "Nano Banana"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
