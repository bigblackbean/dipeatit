import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "05회차",
  "title": "카피 프레임워크 3가지",
  "summary": "막막할 때는 검증된 문장 구조에서 시작하세요.",
  "kind": "cards",
  "points": [
    "문제 → 해결",
    "기능 → 고객 효익",
    "지금 → 달라질 미래"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
