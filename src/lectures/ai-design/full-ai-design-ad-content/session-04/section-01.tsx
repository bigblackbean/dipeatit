import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "04회차",
  "title": "아이디어를 기획서로 바꾸기",
  "summary": "목표·타겟·메시지·매체를 한 흐름으로 연결합니다.",
  "kind": "cover",
  "points": [
    "광고 목표",
    "핵심 타겟",
    "전달 메시지"
  ],
  "tools": [
    "Gemini",
    "ChatGPT"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
