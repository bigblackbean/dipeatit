"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ImageLessonSlide } from "./slides";
import styles from "./image-lesson-slide.module.css";

function CopyPrompt({ text }: { text: string }) {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text.replace(/^[“]|[”]$/g, ""));
      setMessage("복사했습니다");
    } catch {
      setMessage("텍스트를 선택해 복사해주세요");
    }
  }
  return <div className={styles.copyRow}><button type="button" onClick={copy}>프롬프트 복사</button><span role="status">{message}</span></div>;
}

function ExampleImage({ src, alt }: { src: string; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <figure className={styles.figure}>
    <button type="button" className={styles.imageButton} onClick={() => dialog.current?.showModal()} aria-label={`${alt} 이미지 확대`}>
      <Image src={src} alt={alt} fill unoptimized sizes="90vw" className={styles.image} />
    </button>
    <figcaption>{alt}</figcaption>
    <dialog ref={dialog} className={styles.dialog} aria-label={alt} onKeyDown={event => event.stopPropagation()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.dialogHeader}><span>{alt}</span><button type="button" onClick={() => dialog.current?.close()} autoFocus>닫기</button></div>
      <div className={styles.expandedImage}><Image src={src} alt={alt} fill unoptimized sizes="95vw" className={styles.image}/></div>
    </dialog>
  </figure>;
}

export function ImageLessonSlideView({ slide }: { slide: ImageLessonSlide }) {
  const isCover = slide.kind === "cover";
  return <div className={styles.container}>
    <article className={`${styles.slide} ${isCover ? styles.cover : ""}`} aria-label={slide.title} data-lesson-slide={slide.id}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{slide.eyebrow}</p>
        <h2>{slide.title}</h2>
        {slide.summary && <p className={styles.summary}>{slide.summary}</p>}
      </header>
      {isCover ? <div className={styles.coverBody}>
        <p className={styles.lead}>{slide.body[0]}</p>
        <p className={styles.summary}>{slide.body[1]}</p>
        <p className={styles.disclosure}>{slide.body[2]}</p>
      </div> : slide.kind === "prompt" ? <>
        <div className={styles.promptGrid}>
          <section className={styles.vague}><h3>모호한 요청</h3><p>{slide.vague}</p></section>
          <section className={styles.specific}><h3>구체적인 요청</h3><p className={styles.prompt}>{slide.prompt}</p><CopyPrompt text={slide.prompt!}/></section>
        </div>
        <aside className={styles.callout}><strong>따라하기 / 응용</strong><p>{slide.body.join(" ")}</p></aside>
      </> : slide.kind === "gallery" ? <>
        <div className={styles.gallery} style={{ gridTemplateColumns: `repeat(${slide.images.length}, minmax(0, 1fr))` }}>
          {slide.images.map(image => <ExampleImage key={image.src} {...image}/>)}
        </div>
        <aside className={styles.observation}>{slide.body.map(text => <p key={text}>{text}</p>)}</aside>
      </> : slide.kind === "feature" ? <div className={styles.feature}>
        <div className={styles.featurePoints}>{slide.body.map(text => <p key={text}>{text}</p>)}</div>
        <ExampleImage {...slide.images[0]}/>
      </div> : slide.kind === "template" ? <section className={styles.template}>
        <pre>{slide.prompt}</pre><CopyPrompt text={slide.prompt!}/>
      </section> : slide.kind === "topics" ? <ol className={styles.topics}>{slide.body.map(text => <li key={text}><span>{text.slice(0,2)}</span>{text.slice(3)}</li>)}</ol>
      : <ol className={styles.points}>{slide.body.map((text, index) => <li key={text}><span>{String(index+1).padStart(2,"0")}</span><p>{text.replace(/^\d+\.\s*/, "")}</p></li>)}</ol>}
      {slide.note && <p className={styles.note}>{slide.note}</p>}
    </article>
  </div>;
}
