import { ComponentPresentation } from "./component-presentation";
import { componentLessonSlides } from "./slides";

export const sections = componentLessonSlides.map(slide => {
  function Section() {
    return <ComponentPresentation slide={slide} />;
  }
  Section.displayName = `Figma2ComponentSection${slide.sourcePage}`;
  return Section;
});
