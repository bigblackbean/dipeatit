import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "12회차",
  "title": "3종 베리에이션 만들기",
  "summary": "같은 캠페인을 피드·스토리·배너 규격으로 전개합니다.",
  "kind": "practice",
  "points": [
    "안전 영역 확인",
    "카피 줄 수 조절",
    "각 규격에서 최종 검수"
  ],
  "tools": [
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
