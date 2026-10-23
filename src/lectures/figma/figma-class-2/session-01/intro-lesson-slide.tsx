/* eslint-disable @next/next/no-img-element -- Local PDF figures retain their original aspect ratios. */
import type { IntroSlide } from "./slides";
import { sessionConfig } from "./session.config";
import styles from "./intro-lesson-slide.module.css";

function Phone({ kind }: { kind: "home" | "category" | "detail" }) {
  return <div className={styles.phone} aria-label={`${kind} 와이어프레임`}>
    <div className={styles.phoneHeader}><span>←</span><strong>{kind === "home" ? "MORROW" : kind === "category" ? "TOP" : "LINEN SHIRT"}</strong><span>☰</span></div>
    {kind === "home" ? <>
      <div className={styles.banner}>MAIN BANNER</div>
      <div className={styles.tabs}>{["Outer", "Top", "Bottom", "Dress", "Bag", "Shoes"].map(item => <span key={item}>{item}</span>)}</div>
    </> : kind === "category" ? <div className={styles.tabs}>ALL　TOP　NEW　FILTER</div> : null}
    {kind === "detail" ? <>
      <div className={styles.productHero}>PRODUCT IMAGE</div>
      <small>MORROW</small><strong>LINEN BLEND SHIRT</strong><b>49,000원</b>
      <div className={styles.tabs}>COLOR　○　○　○</div><div className={styles.tabs}>SIZE　S　M　L</div>
      <div className={styles.cta}>SELECT OPTION</div>
    </> : <div className={styles.products}>{Array.from({ length: kind === "home" ? 2 : 4 }, (_, i) => <div key={i}><div>PRODUCT</div><small>MORROW</small><p>Light Blue Shirt</p><b>49,000원</b></div>)}</div>}
  </div>;
}

function Diagram({ page }: { page: number }) {
  if ([34, 35, 36, 45, 46, 47].includes(page)) return <Phone kind={[34, 45].includes(page) ? "home" : [35, 46].includes(page) ? "category" : "detail"} />;
  if (page === 15) return <div className={styles.workspace}><div>Toolbar　V　F　R　T</div><aside>Layers / Assets<br /><br />Frame<br />　Image<br />　Text</aside><section>Canvas<div>Frame</div></section><aside>Design / Prototype<br /><br />Position<br />Layout<br />Fill</aside></div>;
  if (page === 16 || page === 22) return <div className={styles.autoLayout}><strong>{page === 16 ? "Frame" : "Vertical Auto Layout"}</strong><div>Image · Fixed</div><div>Text stack · Hug</div><div className={styles.cta}>Button · Fill</div></div>;
  if (page === 21) return <div className={styles.hierarchy}><small>Daily Essential</small><h3>린넨 블렌드 셔츠</h3><p>가볍고 자연스러운 여름 셔츠</p><b>49,000원</b></div>;
  if (page === 43) return <div className={styles.brand}><h3>MORROW</h3><p>오늘과 내일 사이, 매일 입기 좋은 옷</p><div>{["#101010", "#F4F1EA", "#B9C3B0", "#B8563F", "#D9D9D9"].map(color => <span key={color}><i style={{ backgroundColor: color }} />{color}</span>)}</div></div>;
  return null;
}

const diagramPages = [15, 16, 21, 22, 34, 35, 36, 43, 45, 46, 47];
const promptPages = [30, 39, 40];
const flowPages = [2, 6, 25, 27, 33, 38, 48];

export function IntroLessonSlide({ slide }: { slide: IntroSlide }) {
  const page = slide.sourcePage;
  const cover = page === 1;
  const illustrated = slide.images.length > 0 || diagramPages.includes(page);
  const prompt = promptPages.includes(page);
  return <div className={styles.container}>
    <article className={`${styles.slide} ${cover ? styles.cover : ""}`} data-intro-slide={slide.id} aria-label={slide.title}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{slide.eyebrow}</p>
        <h2>{slide.title}</h2>
        {slide.summary && <p className={styles.summary}>{slide.summary}</p>}
      </header>
      {cover ? <div className={styles.coverBody}>
        <p>{slide.body[0]}</p><span>2026.10.24 · 1회차</span>
        <div className={styles.materialLinks}>{sessionConfig.attachments.map(file => <a key={file.url} href={file.url} target="_blank" rel="noopener noreferrer" className={styles.materialLink}>수업자료 열기 ↗</a>)}</div>
        <p>{slide.body[1]}</p>
      </div> : <div className={`${styles.content} ${illustrated ? styles.split : ""}`}>
        {illustrated && <div className={`${styles.visual} ${page === 4 ? styles.life : ""}`}>
          <Diagram page={page} />
          {slide.images.map((src, index) => <img key={src} src={src} alt={`${slide.title} - 원본 PDF 예시 ${index + 1}`} />)}
          {page === 24 && <div className={styles.caption}>MORROW<br /><strong>Light Blue Shirt</strong><br />49,000원</div>}
        </div>}
        {prompt ? <blockquote className={styles.prompt}><span>PROMPT</span>{slide.body.map(line => <p key={line}>{line}</p>)}</blockquote>
        : <ol className={`${styles.points} ${flowPages.includes(page) ? styles.flow : ""} ${page === 17 ? styles.shortcuts : ""} ${[49, 50].includes(page) ? styles.checklist : ""}`}>
          {slide.body.map((line, index) => <li key={line}><span className={styles.marker}>{[49, 50].includes(page) ? "✓" : String(index + 1).padStart(2, "0")}</span><p>{line}</p></li>)}
        </ol>}
      </div>}
      <footer className={styles.footer}><span>FIGMA · UI / UX / AI</span><span>{String(page).padStart(2, "0")} / 50</span></footer>
    </article>
  </div>;
}
