import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-03",
  "eyebrow": "04회차",
  "title": "AI 이미지 속 텍스트 다듬기",
  "summary": "생성 이미지의 글자는 후편집을 전제로 작업합니다.",
  "kind": "practice",
  "points": [
    "텍스트 없는 원본 생성",
    "정확한 문구 별도 입력",
    "크기·간격·대비 검수"
  ],
  "tools": [
    "Gemini",
    "ChatGPT",
    "Photoshop"
  ]
};
export function Section03() { return <CourseSlide slide={slide} />; }
