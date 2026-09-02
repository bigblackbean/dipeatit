import { CourseSlide } from "@/app/components/lecture/course-slide";
import type { SlideSpec } from "../../../types";

const slide: SlideSpec = {
  "id": "section-02",
  "eyebrow": "07회차",
  "title": "톤앤매너의 구성 요소",
  "summary": "각 요소가 같은 성격을 말할 때 브랜드가 선명해집니다.",
  "kind": "cards",
  "points": [
    "컬러와 대비",
    "폰트와 문장 톤",
    "이미지의 빛과 질감"
  ],
  "tools": []
};
export function Section02() { return <CourseSlide slide={slide} />; }
