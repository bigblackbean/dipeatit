import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "06회차",
  "title": "SNS 광고 1장 점검",
  "summary": "작은 화면에서도 핵심 메시지가 남는지 확인합니다.",
  "kind": "practice",
  "points": [
    "썸네일 크기로 축소",
    "3초 안에 메시지 확인",
    "불필요한 요소 한 개 삭제"
  ],
  "tools": [
    "미리캔버스",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
