import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "10회차",
  "title": "미니 브랜드 가이드",
  "summary": "팀과 AI가 같은 결과를 만들 수 있도록 규칙을 문장화합니다.",
  "kind": "cards",
  "points": [
    "우리가 지키는 인상",
    "사용 색상과 글꼴",
    "이미지 생성 원칙"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
