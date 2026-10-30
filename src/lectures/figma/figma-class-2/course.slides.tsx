import type { SlideComponent } from "../../types";
import { sections as session1 } from "./session-01/page";
import { sections as session2 } from "./session-02/page";

function PreparingLesson() {
  return <article className="flex aspect-video h-full w-full flex-col items-center justify-center gap-5 bg-[#f7faff] p-[6%] text-center">
    <p className="font-bold text-[#3478f6]">피그마 강의 2기</p>
    <h2 className="text-[clamp(24px,3vw,56px)] font-bold">강의 준비 중</h2>
    <p className="text-[clamp(12px,1.4vw,24px)] text-[#667085]">회차별 강의자료가 이곳에 추가될 예정입니다.</p>
  </article>;
}

export const courseSlides: Record<string, SlideComponent[]> = {
  "session-01": session1,
  "session-02": session2,
  "session-03": [PreparingLesson],
  "session-04": [PreparingLesson],
  "session-05": [PreparingLesson],
};
