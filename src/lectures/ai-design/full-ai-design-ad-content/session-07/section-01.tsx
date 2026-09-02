import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "07회차",
  "title": "브랜드의 분위기를 한눈에",
  "summary": "컬러·폰트·이미지·질감을 모아 같은 방향을 공유합니다.",
  "kind": "cover",
  "points": [
    "브랜드 키워드",
    "시각 레퍼런스",
    "금지할 표현"
  ],
  "tools": [
    "Gemini",
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
