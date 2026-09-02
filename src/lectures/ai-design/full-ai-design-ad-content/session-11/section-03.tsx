import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "11회차",
  "title": "한 번에 하나씩 수정하기",
  "summary": "변수를 작게 바꾸며 어떤 지시가 결과를 개선했는지 기록하세요.",
  "kind": "practice",
  "points": [
    "가장 큰 문제 선택",
    "수정 지시 한 가지 작성",
    "이전 결과와 나란히 비교"
  ],
  "tools": [
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
