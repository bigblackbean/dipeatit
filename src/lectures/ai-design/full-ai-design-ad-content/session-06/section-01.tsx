import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "06회차",
  "title": "보이게 만드는 디자인",
  "summary": "타이포그래피와 여백으로 읽는 순서를 설계합니다.",
  "kind": "cover",
  "points": [
    "정보 위계",
    "정렬과 여백",
    "시선의 흐름"
  ],
  "tools": [
    "Gemini",
    "Nano Banana",
    "미리캔버스",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
