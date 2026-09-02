import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "03회차",
  "title": "페르소나를 입체적으로 만드는 요소",
  "summary": "나이만 정하는 것이 아니라 상황과 행동을 함께 정의합니다.",
  "kind": "cards",
  "points": [
    "상황과 불편",
    "선택 기준",
    "사용 언어와 채널"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
