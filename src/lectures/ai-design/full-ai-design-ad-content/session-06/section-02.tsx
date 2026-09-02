import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "06회차",
  "title": "레이아웃의 기본 원칙",
  "summary": "꾸미기보다 무엇을 먼저 보게 할지 결정하세요.",
  "kind": "cards",
  "points": [
    "크기로 중요도 표현",
    "같은 기준선에 정렬",
    "관련 정보끼리 묶기"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
