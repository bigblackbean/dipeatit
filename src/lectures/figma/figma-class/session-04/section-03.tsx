import { PrototypeLessonSlideView } from "./prototype-lesson-slide";
import { prototypeLessonSlides } from "./slides";

export function Section03() {
  return <PrototypeLessonSlideView slide={prototypeLessonSlides[2]} />;
}
