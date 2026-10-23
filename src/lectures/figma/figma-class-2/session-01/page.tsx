import { IntroLessonSlide } from "./intro-lesson-slide";
import { introSlides } from "./slides";

export const sections = introSlides.map(slide => {
  function Section() {
    return <IntroLessonSlide slide={slide} />;
  }
  Section.displayName = `FigmaIntroSection${slide.sourcePage}`;
  return Section;
});
