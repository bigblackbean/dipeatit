import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "13회차",
  "title": "사람의 판단으로 완성하기",
  "summary": "HITL 검수로 오류를 줄이고 브랜드와 목적에 맞는 결과물을 선택합니다.",
  "kind": "cover",
  "points": [
    "최종 품질 검수",
    "결과물 발표",
    "포트폴리오 방향"
  ],
  "tools": [
    "Gemini",
    "Claude",
    "Canva",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
