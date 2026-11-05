"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";
import { courseConfig as figmaClass2 } from "@/src/lectures/figma/figma-class-2/course.config";

const examples = [
  { width: 160, height: 248 },
  { width: 240, height: 306 },
  { width: 320, height: 396 },
  { width: 400, height: 398 },
];

const requirements = [
  "상품 이미지, 상품명, 가격, 할인율, 구매 버튼을 포함한다.",
  "상품 카드는 컴포넌트로 제작한다.",
  "상품명은 한 줄 또는 여러 줄이 될 수 있다.",
  "구매 버튼은 카드 너비에 맞춰 늘어나야 한다.",
  "카드 너비를 160px, 240px, 320px로 변경해도 레이아웃이 깨지지 않아야 한다.",
  "상품 카드 3개를 가로로 배치하고 부모 프레임의 너비를 변경해 본다.",
];

const criteria = [
  "Fixed, Fill, Hug를 상황에 맞게 적용했는가?",
  "반복 요소를 재사용 가능하게 구성했는가?",
  "크기와 콘텐츠가 달라져도 UI가 유지되는가?",
  "레이어 이름과 중첩 구조가 명확한가?",
];

export type CourseContentTab = "lessons" | "homework";

export function HomeworkReferenceLink() {
  return (
    <a
      href="https://drive.google.com/drive/folders/1BeUdDKEVbsDqUjyoFdAWZeei8c9aSjT_"
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#3478f6] underline underline-offset-4 hover:text-[#2467e8]"
    >
      숙제참고자료 <span className="sr-only">(새 탭에서 열기)</span> ↗
    </a>
  );
}

export function CourseLearningContent({ courseId, children, activeTab, onTabChange }: {
  courseId: string;
  children: ReactNode;
  activeTab?: CourseContentTab;
  onTabChange?: (tab: CourseContentTab) => void;
}) {
  const [localTab, setLocalTab] = useState<CourseContentTab>("lessons");
  const tab = activeTab ?? localTab;
  const setTab = (next: CourseContentTab) => {
    setLocalTab(next);
    onTabChange?.(next);
  };
  const id = useId();

  if (courseId !== figmaClass2.id) return children;

  return (
    <div>
      <div className="mb-6 flex gap-2 border-b border-[#e1e7f0]" role="tablist" aria-label="강의 콘텐츠">
        {[
          { id: "lessons", label: "강의" },
          { id: "homework", label: "숙제" },
        ].map((item) => (
          <button
            key={item.id}
            id={`${id}-${item.id}-tab`}
            role="tab"
            aria-selected={tab === item.id}
            aria-controls={`${id}-${item.id}-panel`}
            tabIndex={tab === item.id ? 0 : -1}
            onClick={() => setTab(item.id as CourseContentTab)}
            onKeyDown={(event) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next = event.key === "Home" ? "lessons" : event.key === "End" ? "homework" : tab === "lessons" ? "homework" : "lessons";
              setTab(next);
              document.getElementById(`${id}-${next}-tab`)?.focus();
            }}
            className={`focus-ring border-b-2 px-5 py-3 text-sm font-bold ${tab === item.id ? "border-[#3478f6] text-[#3478f6]" : "border-transparent text-[#667085] hover:text-[#3478f6]"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div id={`${id}-lessons-panel`} role="tabpanel" aria-labelledby={`${id}-lessons-tab`} hidden={tab !== "lessons"} tabIndex={0} className="focus-ring rounded-xl">
        {children}
      </div>
      <div id={`${id}-homework-panel`} role="tabpanel" aria-labelledby={`${id}-homework-tab`} hidden={tab !== "homework"} tabIndex={0} className="focus-ring rounded-xl">
        <HeadphoneHomework />
      </div>
    </div>
  );
}

function HeadphoneHomework() {
  return (
    <article className="space-y-6 rounded-[24px] border border-[#e1e7f0] bg-white p-5 sm:p-8">
      <header>
        <p className="text-xs font-bold tracking-widest text-[#6c56e8]">HOMEWORK</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">반응형 헤드폰 썸네일 제작하기</h2>
        <div className="mt-4"><HomeworkReferenceLink /></div>
      </header>

      <aside className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <h3 className="font-bold text-violet-900">주의할 점</h3>
        <p className="mt-2 text-sm leading-7 text-violet-900">
          4개의 시안을 만드는 게 아니라, <strong>4가지 형태로 변형이 가능한 1개의 상품 썸네일 컴포넌트</strong>를 만드는 것입니다.
        </p>
      </aside>

      <section aria-labelledby="homework-examples">
        <h3 id="homework-examples" className="text-lg font-bold">크기별 예시</h3>
        <p className="mt-2 text-sm text-[#667085]">160px → 240px → 320px → 400px 순서입니다.</p>
        <div className="mt-5 flex flex-wrap items-start gap-6 rounded-2xl bg-[#f7f8fc] p-4 sm:p-6">
          {examples.map(({ width, height }) => (
            <figure key={width} className="m-0 min-w-0 max-w-full" style={{ width }}>
              <figcaption className="mb-3 text-sm font-bold text-[#667085]">{width}px</figcaption>
              <Image
                src={`/lectures/figma-class-2/homework/product-card-${width}.png`}
                alt={`${width}px 너비의 반응형 헤드폰 상품 카드 예시`}
                width={width}
                height={height}
                sizes={`(max-width: 640px) 100vw, ${width}px`}
                className="h-auto max-w-full rounded-xl"
              />
            </figure>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {[
          { title: "숙제 내용", items: requirements },
          { title: "채점 기준", items: criteria },
        ].map(({ title, items }) => (
          <section key={title} className="rounded-2xl border border-[#e1e7f0] p-5 sm:p-6">
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#475467] marker:text-[#6c56e8]">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
