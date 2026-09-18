import { VariablesLessonSlideView } from "./variables-lesson-slide";
import { variablesLessonSlides } from "./slides";

export const sections = variablesLessonSlides.map((slide) => {
  function VariablesLessonSection() {
    return <VariablesLessonSlideView slide={slide} />;
  }

  VariablesLessonSection.displayName = `VariablesLessonSection${slide.id.slice(-2)}`;
  return VariablesLessonSection;
});
