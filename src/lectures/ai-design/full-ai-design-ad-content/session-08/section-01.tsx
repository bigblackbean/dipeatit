import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "08회차",
  "title": "생성에서 편집으로",
  "summary": "AI 결과물을 선택·레이어·마스크로 원하는 광고에 맞춥니다.",
  "kind": "cover",
  "points": [
    "선택 영역",
    "레이어 구조",
    "마스크 편집"
  ],
  "tools": [
    "Nano Banana",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
