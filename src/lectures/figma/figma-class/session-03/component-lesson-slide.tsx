import type { ComponentLessonSlide } from "./slides";
import { sessionConfig } from "./session.config";
import styles from "./component-lesson-slide.module.css";

function parseShortcut(text: string) {
  const separate = text.match(/^(.*?)\s+Win(?:dows)?:\s*(.*?)\s*\/?\s*Mac:\s*(.*)$/);
  if (separate) return { label: separate[1], windows: separate[2].replace(/\s*\/$/, ""), mac: separate[3] };
  const common = text.match(/^(.*?)\s+Win\s*\/\s*Mac:\s*(.*)$/);
  if (common) return { label: common[1], windows: common[2], mac: common[2] };
  return null;
}

function ShortcutTable({ lines }: { lines: string[] }) {
  const rows = lines.map(parseShortcut).filter(row => row !== null);
  const notes = lines.filter(line => !parseShortcut(line));
  return <>
    {rows.length > 0 && <table className={styles.shortcuts}>
      <thead><tr><th scope="col">기능</th><th scope="col">Windows</th><th scope="col">Mac</th></tr></thead>
      <tbody>{rows.map(row => <tr key={row.label}><th scope="row">{row.label}</th><td><kbd>{row.windows}</kbd></td><td><kbd>{row.mac}</kbd></td></tr>)}</tbody>
    </table>}
    {notes.map(note => <p className={styles.note} key={note}>{note}</p>)}
  </>;
}

export function ComponentLessonSlideView({ slide }: { slide: ComponentLessonSlide }) {
  const cover = slide.kind === "cover";
  return <div className={styles.container}>
    <article className={`${styles.slide} ${cover ? styles.cover : ""}`} data-component-slide={slide.id} aria-label={slide.title}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{slide.eyebrow}</p>
        <h2>{slide.title}</h2>
      </header>
      {cover ? <div className={styles.coverContent}>
        <p className={styles.lead}>{slide.body[0]}</p>
        <p className={styles.subtitle}>{slide.body[1]}</p>
        <p className={styles.platforms}>{slide.body[2]}</p>
        <a href={sessionConfig.attachments[0].url} target="_blank" rel="noopener noreferrer" className={styles.materialLink}>수업자료 열기 ↗</a>
      </div> : slide.kind === "agenda" ? <>
        <p className={styles.goal}>{slide.body[0]}</p>
        <ol className={styles.agenda}>{slide.body.slice(1).map(line => <li key={line}><span>{line.slice(0,2)}</span>{line.slice(3)}</li>)}</ol>
      </> : slide.kind === "shortcuts" ? <div className={styles.shortcutSummary}><ShortcutTable lines={slide.body}/></div>
      : <ol className={`${styles.points} ${slide.kind === "practice" ? styles.practice : ""}`}>
        {slide.body.map((line, index) => <li key={line}>
          <span className={styles.marker} aria-hidden="true">{slide.kind === "checklist" ? "✓" : String(index + 1).padStart(2,"0")}</span>
          <p>{line.replace(/^\d+\.\s*/, "")}</p>
        </li>)}
      </ol>}
      {slide.shortcuts.length > 0 && <aside className={styles.shortcutFooter} aria-label="단축키와 실행 안내"><ShortcutTable lines={slide.shortcuts}/></aside>}
    </article>
  </div>;
}
