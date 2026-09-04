import { ComponentLessonSlideView } from "./component-lesson-slide";
import { componentLessonSlides } from "./slides";

export function Section04() {
  return <ComponentLessonSlideView slide={componentLessonSlides[3]} />;
}
