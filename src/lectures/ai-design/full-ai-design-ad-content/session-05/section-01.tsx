import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "05회차",
  "title": "한 문장으로 마음을 움직이기",
  "summary": "광고 카피는 제품 설명이 아니라 고객이 얻을 변화를 말합니다.",
  "kind": "cover",
  "points": [
    "고객의 문제",
    "선명한 효익",
    "기억되는 리듬"
  ],
  "tools": [
    "Gemini",
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
