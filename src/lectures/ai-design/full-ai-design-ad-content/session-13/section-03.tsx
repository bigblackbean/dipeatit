import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "13회차",
  "title": "나의 제작 과정을 소개하기",
  "summary": "완성본과 함께 문제 해결 과정과 판단 기준을 보여주세요.",
  "kind": "practice",
  "points": [
    "목표와 타겟 설명",
    "AI 활용 과정 기록",
    "수정 전후와 배운 점 정리"
  ],
  "tools": [
    "Gemini",
    "Claude",
    "Canva",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
