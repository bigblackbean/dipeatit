import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "09회차",
  "title": "여러 이미지를 하나의 장면으로",
  "summary": "빛·원근·색을 맞추면 서로 다른 소스가 자연스럽게 연결됩니다.",
  "kind": "cover",
  "points": [
    "광고 이미지 생성",
    "포토샵 합성",
    "텍스트 마무리"
  ],
  "tools": [
    "Nano Banana",
    "미리캔버스",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
