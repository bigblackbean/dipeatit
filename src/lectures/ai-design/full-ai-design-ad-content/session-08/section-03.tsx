import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "08회차",
  "title": "제품 누끼와 보정 실습",
  "summary": "배경에서 제품을 분리하고 자연스러운 색감으로 정돈합니다.",
  "kind": "practice",
  "points": [
    "피사체 선택",
    "마스크 가장자리 보정",
    "웹용 파일로 저장"
  ],
  "tools": [
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
