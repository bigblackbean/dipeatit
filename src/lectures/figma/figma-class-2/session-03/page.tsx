import { sections as prototypeSections } from "../../figma-class/session-04/page";
import { PrototypeLessonSlideView } from "../../figma-class/session-04/prototype-lesson-slide";
import { prototypeLessonSlides } from "../../figma-class/session-04/slides";
import { PROTOTYPE_MATERIAL_URL } from "./session.config";

const cover = { ...prototypeLessonSlides[0], eyebrow: "피그마 · 3회차" };

function Cover() {
  return <PrototypeLessonSlideView slide={cover} materialUrl={PROTOTYPE_MATERIAL_URL} />;
}

export const sections = [Cover, ...prototypeSections.slice(1)];
