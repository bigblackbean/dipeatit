import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "09회차",
  "title": "광고 결과물 완성하기",
  "summary": "생성부터 출력까지 한 번의 제작 루틴을 경험합니다.",
  "kind": "practice",
  "points": [
    "배경과 제품 합성",
    "핵심 카피 배치",
    "모바일 규격으로 내보내기"
  ],
  "tools": [
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
