import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-01",
  "eyebrow": "01회차",
  "title": "생성형 AI와 첫 만남",
  "summary": "광고 콘텐츠 제작의 전체 지도를 그려봅니다.",
  "kind": "cover",
  "points": [
    "생성형 AI의 역할",
    "광고 제작 프로세스",
    "오늘의 실습 환경"
  ],
  "tools": [
    "ChatGPT",
    "Gemini",
    "Nano Banana",
    "Canva",
    "미리캔버스",
    "Photoshop"
  ]
};
export function Section01() { return <CourseSlide slide={slide} />; }
