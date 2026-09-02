import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "03회차",
  "title": "카드뉴스 또는 썸네일 만들기",
  "summary": "페르소나가 멈춰 볼 한 장을 제작해보세요.",
  "kind": "practice",
  "points": [
    "핵심 문장 15자 이내",
    "시선이 모이는 이미지",
    "모바일 축소 화면 확인"
  ],
  "tools": [
    "Gemini",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
