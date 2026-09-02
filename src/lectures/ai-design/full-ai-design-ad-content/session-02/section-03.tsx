import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "02회차",
  "title": "프롬프트 검증 루틴",
  "summary": "AI의 답변은 출발점입니다. 출처와 날짜를 반드시 확인하세요.",
  "kind": "practice",
  "points": [
    "질문의 목적 명시",
    "근거 URL 요청",
    "원문과 답변 교차 확인"
  ],
  "tools": [
    "Gemini",
    "Perplexity"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
