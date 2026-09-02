import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "01회차",
  "title": "첫 실습 체크리스트",
  "summary": "도구에 로그인하고 하나의 광고 아이디어를 문장으로 만들어보세요.",
  "kind": "practice",
  "points": [
    "목표 고객 한 명 정하기",
    "제품의 장점 한 줄 쓰기",
    "AI에게 광고 문구 3개 요청하기"
  ],
  "tools": [
    "ChatGPT",
    "Gemini"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
