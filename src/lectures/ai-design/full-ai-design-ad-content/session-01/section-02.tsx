import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "01회차",
  "title": "생성형 AI, 무엇이 다른가요?",
  "summary": "명령을 수행하는 도구를 넘어 새로운 결과물을 만드는 협업 파트너입니다.",
  "kind": "cards",
  "points": [
    "텍스트와 이미지 생성",
    "아이디어 확장과 초안 제작",
    "사람의 판단으로 검수"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
