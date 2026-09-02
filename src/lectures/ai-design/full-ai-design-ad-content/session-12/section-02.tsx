import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "12회차",
  "title": "규격이 바뀌면 위계도 바뀝니다",
  "summary": "단순 리사이즈가 아니라 메시지의 위치와 밀도를 조정하세요.",
  "kind": "cards",
  "points": [
    "정사각형: 한눈에",
    "세로형: 순차적 몰입",
    "가로형: 좌우 흐름"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
