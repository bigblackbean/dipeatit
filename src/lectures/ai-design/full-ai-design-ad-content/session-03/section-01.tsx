import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "03회차",
  "title": "누구를 위한 광고인가요?",
  "summary": "구체적인 한 사람을 떠올리면 메시지와 비주얼이 선명해집니다.",
  "kind": "cover",
  "points": [
    "인구 특성",
    "욕구와 동기",
    "자주 보는 매체"
  ],
  "tools": [
    "Gemini",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
