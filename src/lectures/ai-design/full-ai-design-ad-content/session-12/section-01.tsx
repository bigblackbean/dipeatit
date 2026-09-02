import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "12회차",
  "title": "하나의 아이디어, 여러 매체",
  "summary": "핵심은 유지하고 화면 비율과 소비 맥락에 맞게 재구성합니다.",
  "kind": "cover",
  "points": [
    "SNS 광고 3종",
    "상세페이지",
    "인쇄 결과물"
  ],
  "tools": [
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
