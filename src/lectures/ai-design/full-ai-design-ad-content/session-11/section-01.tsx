import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "11회차",
  "title": "피드백을 수정 기준으로",
  "summary": "좋다·나쁘다가 아니라 목표와 기준으로 결과물을 검토합니다.",
  "kind": "cover",
  "points": [
    "브랜드 일치",
    "메시지 전달",
    "제작 완성도"
  ],
  "tools": [
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
