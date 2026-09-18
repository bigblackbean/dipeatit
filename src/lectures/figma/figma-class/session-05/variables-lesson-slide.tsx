import type { VariablesLessonSlide } from "./slides";
import styles from "./variables-lesson-slide.module.css";

const split = (item: string) => item.split("|");

function Cards({ items }: { items: string[] }) {
  return <div className={styles.cards}>{items.map((item, index) => {
    const [label, detail = label] = split(item);
    return <section key={`${label}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3>{detail !== label && <p>{detail}</p>}</section>;
  })}</div>;
}

function Compare({ items }: { items: string[] }) {
  const midpoint = Math.ceil(items.length / 2);
  return <div className={styles.compare}>{[items.slice(0, midpoint), items.slice(midpoint)].map((group, index) => <section key={index} className={index ? styles.after : ""}>
    <h3>{split(group[0])[0]}</h3>
    {group.map((item, row) => <p key={`${item}-${row}`}>{split(item)[1] ?? item}</p>)}
  </section>)}</div>;
}

function Hierarchy({ items }: { items: string[] }) {
  return <div className={styles.hierarchy}>{items.map((item, index) => {
    const [label, detail] = split(item);
    return <section key={label}><span>{index + 1}</span><div><h3>{label}</h3><p>{detail}</p></div></section>;
  })}</div>;
}

function Palette({ items }: { items: string[] }) {
  return <div className={styles.palette}>{items.map((item) => {
    const [label, value] = split(item);
    const color = value.startsWith("#") ? value : "var(--primary)";
    return <section key={label}><i style={{ background: color }} /><div><h3>{label}</h3><p>{value}</p></div></section>;
  })}</div>;
}

function Scale({ items }: { items: string[] }) {
  return <div className={styles.scale}>{items.map((item, index) => {
    const [label, value = ""] = split(item);
    return <section key={label}><div style={{ width: `${28 + index * 10}%` }} /><h3>{label}</h3><p>{value}</p></section>;
  })}</div>;
}

function ModeTable({ items }: { items: string[] }) {
  const rows = items.map(split);
  return <div className={styles.modeTable}>{rows.map((row, index) => <section key={row[0]} className={index === 0 ? styles.modeHead : ""}>{row.map((cell) => <span key={cell}>{cell}</span>)}</section>)}</div>;
}

function Chain({ items }: { items: string[] }) {
  return <div className={styles.chain}>{items.map((item, index) => {
    const [label, detail] = split(item);
    return <section key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>{detail}</p></section>;
  })}</div>;
}

function StandardList({ slide }: { slide: VariablesLessonSlide }) {
  const checklist = slide.kind === "checklist";
  return <ul className={`${styles.list} ${slide.kind === "practice" ? styles.practice : ""}`}>{slide.items.map((item, index) => {
    const [label, detail] = split(item);
    return <li key={`${item}-${index}`}><span>{checklist ? "✓" : String(index + 1).padStart(2, "0")}</span><p>{detail ? <><strong>{label}</strong>{detail}</> : label}</p></li>;
  })}</ul>;
}

export function VariablesLessonSlideView({ slide }: { slide: VariablesLessonSlide }) {
  const variantClass = slide.kind === "cover" ? styles.cover
    : slide.kind === "closing" ? styles.closing
    : slide.kind === "types" ? styles.types
    : slide.kind === "glossary" ? styles.glossary
    : "";
  const body = slide.kind === "grid" || slide.kind === "types" ? <Cards items={slide.items} />
    : slide.kind === "compare" || slide.kind === "toggle" ? <Compare items={slide.items} />
    : slide.kind === "hierarchy" ? <Hierarchy items={slide.items} />
    : slide.kind === "palette" ? <Palette items={slide.items} />
    : slide.kind === "scale" ? <Scale items={slide.items} />
    : slide.kind === "mode" || slide.kind === "locale" ? <ModeTable items={slide.items} />
    : slide.kind === "chain" ? <Chain items={slide.items} />
    : slide.kind === "glossary" ? <Cards items={slide.items} />
    : slide.kind === "steps" ? <ol className={styles.steps}>{slide.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
    : <StandardList slide={slide} />;

  return <div className={styles.container}><article className={`${styles.slide} ${variantClass}`} data-variables-slide={slide.id} aria-label={slide.title}>
    <header><p>{slide.eyebrow}</p><h2>{slide.title}</h2></header>
    {slide.kind === "cover" || slide.kind === "closing" ? <div className={styles.hero}>{slide.items.map((item, index) => index === slide.items.length - 1 ? <div key={item} className={styles.heroChain}>{item}</div> : <p key={item}>{item}</p>)}</div> : body}
    <footer><span>FIGMA VARIABLES</span><span>{slide.id.slice(-2)}</span></footer>
  </article></div>;
}
