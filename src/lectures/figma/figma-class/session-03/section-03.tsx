import { ComponentLessonSlideView } from "./component-lesson-slide";
import { componentLessonSlides } from "./slides";

export function Section03() {
  return <ComponentLessonSlideView slide={componentLessonSlides[2]} />;
}
