import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "08회차",
  "title": "원본을 지키는 편집 습관",
  "summary": "되돌릴 수 있는 구조가 빠른 수정과 협업을 만듭니다.",
  "kind": "cards",
  "points": [
    "레이어 이름 정리",
    "마스크로 숨기기",
    "조정 레이어 활용"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
