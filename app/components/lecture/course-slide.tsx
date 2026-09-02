import { ArrowRight, Check, Layers3, Lightbulb, Sparkles, WandSparkles } from "lucide-react";
import type { SlideSpec } from "@/src/lectures/types";

const cardIcons = [Lightbulb, Layers3, WandSparkles];

export function CourseSlide({ slide }: { slide: SlideSpec }) {
  if (slide.kind === "cover") {
    return (
      <article className="relative flex aspect-video h-full w-full overflow-hidden bg-gradient-to-br from-white via-[#f7faff] to-[#edf4ff] p-[6.5%]">
        <div className="relative z-10 flex w-[62%] flex-col justify-center">
          <span className="mb-[4%] inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-5 py-2.5 text-[clamp(10px,1.25vw,22px)] font-bold text-[#3478f6] shadow-sm"><Sparkles className="w-[1em]" /> {slide.eyebrow}</span>
          <h2 className="text-[clamp(28px,4.4vw,76px)] font-bold leading-[1.12] tracking-[-.055em] text-[#172033]">{slide.title}</h2>
          <p className="mt-[4%] max-w-[90%] text-[clamp(13px,1.6vw,28px)] leading-[1.65] text-[#667085]">{slide.summary}</p>
          <div className="mt-[5%] flex flex-wrap gap-2.5">{slide.tools.map(tool => <span key={tool} className="rounded-lg border border-[#dfe7f3] bg-white px-3 py-1.5 text-[clamp(9px,.92vw,16px)] font-semibold text-[#667085]">{tool}</span>)}</div>
        </div>
        <div className="absolute right-[5%] top-1/2 h-[52%] w-[28%] -translate-y-1/2">
          <div className="absolute inset-x-[10%] bottom-0 h-[85%] -rotate-6 rounded-[12%] border border-white bg-gradient-to-br from-[#b9d8ff] to-[#659eff] shadow-[0_30px_55px_rgba(52,120,246,.25)]" />
          <div className="absolute inset-0 rotate-3 rounded-[12%] border border-white/90 bg-gradient-to-br from-white/90 via-[#b7d4ff] to-[#74a8f7] shadow-[0_28px_60px_rgba(52,120,246,.25)]">
            <div className="absolute inset-[12%] grid place-items-center rounded-[10%] border border-white/70 bg-white/25"><Sparkles className="h-[32%] w-[32%] text-white drop-shadow-md" /></div>
          </div>
        </div>
      </article>
    );
  }

  if (slide.kind === "cards") {
    return (
      <article className="flex aspect-video h-full w-full flex-col overflow-hidden bg-white p-[6%]">
        <span className="text-[clamp(10px,1.05vw,18px)] font-bold text-[#3478f6]">{slide.eyebrow}</span>
        <h2 className="mt-[1%] text-[clamp(26px,3.2vw,56px)] font-bold tracking-[-.05em]">{slide.title}</h2>
        <p className="mt-[1.5%] text-[clamp(12px,1.35vw,24px)] text-[#667085]">{slide.summary}</p>
        <div className="mt-[4%] grid flex-1 grid-cols-3 gap-[2.2%]">
          {slide.points.map((point, index) => {
            const Icon = cardIcons[index % cardIcons.length];
            return <div key={point} className="relative flex flex-col justify-between overflow-hidden rounded-[6%] border border-[#e2e9f3] bg-gradient-to-br from-white to-[#f7faff] p-[10%] shadow-[0_14px_34px_rgba(48,78,138,.07)]"><span className="grid h-[22%] min-h-8 aspect-square place-items-center rounded-[28%] bg-[#edf4ff] text-[#3478f6]"><Icon className="h-[52%] w-[52%]" /></span><p className="text-[clamp(14px,1.65vw,29px)] font-bold leading-[1.35] tracking-[-.035em]">{point}</p><span className="text-[clamp(9px,.8vw,14px)] font-semibold text-[#98a2b3]">0{index + 1}</span></div>;
          })}
        </div>
      </article>
    );
  }

  return (
    <article className="flex aspect-video h-full w-full overflow-hidden bg-gradient-to-br from-[#f8fbff] to-white p-[6%]">
      <div className="flex w-[43%] flex-col justify-center pr-[6%]">
        <span className="mb-[4%] grid h-[clamp(38px,5vw,86px)] w-[clamp(38px,5vw,86px)] place-items-center rounded-[28%] bg-[#3478f6] text-white shadow-[0_15px_30px_rgba(52,120,246,.24)]"><WandSparkles className="h-[48%] w-[48%]" /></span>
        <span className="text-[clamp(10px,1.05vw,18px)] font-bold text-[#3478f6]">{slide.eyebrow} · PRACTICE</span>
        <h2 className="mt-[2%] text-[clamp(26px,3.4vw,58px)] font-bold leading-[1.18] tracking-[-.055em]">{slide.title}</h2>
        <p className="mt-[4%] text-[clamp(12px,1.35vw,24px)] leading-[1.6] text-[#667085]">{slide.summary}</p>
      </div>
      <div className="flex w-[57%] flex-col justify-center gap-[4%] rounded-[5%] border border-[#dfe8f5] bg-white p-[6%] shadow-[0_20px_50px_rgba(48,78,138,.09)]">
        {slide.points.map((point, index) => <div key={point} className="flex items-center gap-[4%]"><span className="grid h-[clamp(30px,3.3vw,58px)] w-[clamp(30px,3.3vw,58px)] shrink-0 place-items-center rounded-full bg-[#edf4ff] text-[#3478f6]"><Check className="h-[46%] w-[46%]" strokeWidth={2.5}/></span><div><p className="text-[clamp(9px,.85vw,15px)] font-bold text-[#98a2b3]">STEP {index + 1}</p><p className="mt-1 text-[clamp(14px,1.55vw,27px)] font-bold tracking-[-.03em]">{point}</p></div></div>)}
        {slide.tools.length > 0 && <div className="mt-[2%] flex items-center gap-2 text-[clamp(9px,.85vw,15px)] font-semibold text-[#667085]">사용 도구 <ArrowRight className="w-[1em]" /> {slide.tools.join(" · ")}</div>}
      </div>
    </article>
  );
}
