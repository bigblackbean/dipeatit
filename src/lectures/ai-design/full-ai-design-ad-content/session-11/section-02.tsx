import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "11회차",
  "title": "AI 이미지 검토 질문",
  "summary": "첫인상과 세부 오류를 나누어 보면 수정 우선순위가 보입니다.",
  "kind": "cards",
  "points": [
    "타겟에게 맞는가",
    "브랜드답게 보이는가",
    "손·문자·제품 오류는 없는가"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
