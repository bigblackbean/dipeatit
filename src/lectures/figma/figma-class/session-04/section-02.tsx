import { PrototypeLessonSlideView } from "./prototype-lesson-slide";
import { prototypeLessonSlides } from "./slides";

export function Section02() {
  return <PrototypeLessonSlideView slide={prototypeLessonSlides[1]} />;
}
