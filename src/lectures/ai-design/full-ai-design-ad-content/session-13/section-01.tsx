import { ImageLessonSlideView } from "./image-lesson-slide";
import { imageLessonSlides } from "./slides";

export function Section01() {
  return <ImageLessonSlideView slide={imageLessonSlides[0]} />;
}
