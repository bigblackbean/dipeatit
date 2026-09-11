import type { PrototypeLessonSlide } from "./slides";
import { PROTOTYPE_MATERIAL_URL } from "./slides";
import styles from "./prototype-lesson-slide.module.css";

function Pipeline({ items }: { items: string[] }) {
  const labels = ["Trigger", "Action", "Destination", "Animation"];
  return <div className={styles.pipeline}>{labels.map((label, index) => {
    const position = items.findIndex(item => item === label || item.startsWith(`${label}|`));
    const inline = position >= 0 ? items[position].split("|")[1] : undefined;
    const detail = inline ?? (position >= 0 ? items[position + 1] : undefined) ?? ["언제 실행되는가?", "무엇을 실행하는가?", "어디로 이동하는가?", "어떻게 보여주는가?"][index];
    return <section key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{detail}</p></section>;
  })}</div>;
}

function SummaryTable({ items }: { items: string[] }) {
  const rows = items.filter(item => item.startsWith("|")).map(item => item.split("|").slice(1, -1).map(value => value.trim()));
  if (rows.length < 2) return null;
  return <table className={styles.table}><thead><tr>{rows[0].map(cell => <th key={cell} scope="col">{cell}</th>)}</tr></thead><tbody>{rows.slice(1).map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map(cell => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table>;
}

export function PrototypeLessonSlideView({ slide }: { slide: PrototypeLessonSlide }) {
  const cover = slide.kind === "cover";
  return <div className={styles.container}><article className={`${styles.slide} ${cover ? styles.cover : ""}`} data-prototype-slide={slide.id} aria-label={slide.title}>
    <header className={styles.header}><p className={styles.eyebrow}>{slide.eyebrow}</p><h2>{slide.title}</h2></header>
    {cover ? <div className={styles.coverBody}><p className={styles.lead}>{slide.items[0]}</p><p>{slide.items.slice(1).join("  ·  ")}</p><a href={PROTOTYPE_MATERIAL_URL} target="_blank" rel="noopener noreferrer">실습 파일 열기 ↗</a></div>
    : slide.kind === "pipeline" ? <Pipeline items={slide.items}/>
    : slide.kind === "table" ? <SummaryTable items={slide.items}/>
    : slide.kind === "keywords" ? <div className={styles.keywords}>{slide.items.map(item => <span key={item}>{item}</span>)}</div>
    : slide.kind === "grid" ? <div className={styles.grid}>{slide.items.map((item, index) => <section key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></section>)}</div>
    : slide.kind === "steps" ? <ol className={styles.timeline}>{slide.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item.replace(/^\d+\.\s*/, "")}</p></li>)}</ol>
    : <ul className={`${styles.list} ${slide.kind === "dense" ? styles.dense : ""} ${slide.kind === "practice" ? styles.practice : ""}`}>
      {slide.items.map((item, index) => <li key={`${index}-${item}`}><span>{slide.kind === "checklist" ? "✓" : String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
    </ul>}
  </article></div>;
}
