import { ComponentLessonSlideView } from "./component-lesson-slide";
import { componentLessonSlides } from "./slides";

export function Section02() {
  return <ComponentLessonSlideView slide={componentLessonSlides[1]} />;
}
