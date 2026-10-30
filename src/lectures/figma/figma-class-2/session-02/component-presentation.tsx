"use client";

import { useState, type CSSProperties } from "react";
import { ArrowRight, Check, ChevronRight, Diamond, Heart, House, Layers, Search, ShoppingCart, User, X } from "lucide-react";
import type { ComponentLessonSlide } from "./slides";
import { sessionConfig } from "./session.config";
import styles from "./component-presentation.module.css";

const icons = [ShoppingCart, Heart, Search];
const labels = ["장바구니 담기", "찜하기", "메뉴 검색"];
const assetIcons = [House, Search, Heart, ShoppingCart, User, X];

function RelationDemo() {
  const [rounded, setRounded] = useState(false);
  return <div className={styles.relation}>
    <div className={styles.demoHeading}><Diamond /> MAIN COMPONENT</div>
    <div className={styles.master}><span>Button / Primary</span><div className={styles.sampleButton} style={{ borderRadius: rounded ? "3cqw" : ".45cqw" }}>기본 버튼 <ArrowRight /></div></div>
    <div className={styles.connectors} aria-hidden="true"><i /><i /><i /></div>
    <div className={styles.instances}>{["로그인", "회원가입", "주문하기"].map(label => <div key={label}><Diamond /><div className={styles.sampleButton} style={{ borderRadius: rounded ? "3cqw" : ".45cqw" }}>{label}</div></div>)}</div>
    <p className={styles.diagramCaption}>하나의 원본 → 연결된 세 개의 Instance</p>
    <button className={styles.demoControl} aria-pressed={rounded} onClick={() => setRounded(!rounded)}>원본 Radius 바꾸기 <ArrowRight /></button>
    <p className={styles.demoHint} aria-live="polite">{rounded ? "모든 Instance의 모서리가 함께 바뀌었습니다." : "클릭해서 원본의 변경이 전달되는 과정을 확인하세요."}</p>
  </div>;
}

function PropertyDemo({ mode }: { mode: "variant" | "boolean" | "swap" }) {
  const [secondary, setSecondary] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [icon, setIcon] = useState(0);
  const [label, setLabel] = useState(labels[0]);
  const Icon = icons[icon];
  return <div className={styles.propertyDemo}>
    <div className={styles.demoHeading}><Layers /> COMPONENT PROPERTIES</div>
    <div className={styles.preview}>
      <span>◇ Button Instance</span>
      <button disabled={disabled} className={`${styles.sampleButton} ${secondary ? styles.secondary : ""}`}><span className={styles.iconSlot} data-visible={showIcon}><Icon key={icon} /></span>{label}</button>
    </div>
    <div className={styles.propertyRows}>
      {mode === "variant" && <>
        <button onClick={() => setSecondary(!secondary)} aria-pressed={secondary}><span>Type</span><b>{secondary ? "Secondary" : "Primary"}<ChevronRight /></b></button>
        <button onClick={() => setDisabled(!disabled)} aria-pressed={disabled}><span>State</span><b>{disabled ? "Disabled" : "Default"}<ChevronRight /></b></button>
      </>}
      {mode !== "variant" && <button onClick={() => setShowIcon(!showIcon)} aria-pressed={showIcon}><span>Show Icon</span><i className={styles.toggle} data-on={showIcon}><i /></i></button>}
      {mode === "swap" && <>
        <label><span>Label</span><input aria-label="버튼 Label" value={label} maxLength={14} onChange={event => setLabel(event.target.value)} /></label>
        <button onClick={() => setIcon((icon + 1) % icons.length)}><span>Icon</span><b><Icon />{["cart", "heart", "search"][icon]}<ChevronRight /></b></button>
      </>}
    </div>
    <p className={styles.demoHint}>속성 값을 직접 바꾸고 결과를 확인해 보세요.</p>
  </div>;
}

function HierarchyDemo({ assets = false }: { assets?: boolean }) {
  return <div className={styles.hierarchyDemo}>
    <div className={styles.demoHeading}><Layers /> {assets ? "ASSETS LIBRARY" : "NESTED COMPONENT"}</div>
    {assets ? <div className={styles.assetGrid}>{["home", "search", "heart", "cart", "user", "close"].map((name, index) => { const Icon = assetIcons[index]; return <div key={name}><Diamond /><Icon /><span>icons/{name}</span></div>; })}</div>
      : <div className={styles.nesting}><span>◇ Product Card</span><div><span>◇ Button Instance</span><div><ShoppingCart /><span>◇ Icon Instance</span></div></div></div>}
    <div className={styles.flowLegend}><span>Icon</span><ArrowRight /><span>Button</span><ArrowRight /><span>Card</span></div>
    <p className={styles.diagramCaption}>{assets ? "이름으로 정리하고 Assets에서 검색하기" : "작은 컴포넌트를 조합해 큰 UI 만들기"}</p>
  </div>;
}

function FoodDemo() {
  const [cheese, setCheese] = useState(true);
  const [quantity, setQuantity] = useState(1);
  return <div className={styles.foodDemo}>
    <div className={styles.phone}>
      <div className={styles.phoneTop}>‹ <span>MENU DETAIL</span><Heart /></div>
      <div className={styles.foodArt} aria-label="버거 일러스트"><i /><i /><i /><i /></div>
      <div className={styles.foodInfo}><small>BEST MENU</small><h3>트러플 치즈 버거</h3><p>★ 4.8 · 리뷰 238</p><strong>12,900원</strong></div>
      <button className={styles.option} aria-pressed={cheese} onClick={() => setCheese(!cheese)}><span className={cheese ? styles.selected : ""}>{cheese && <Check />}</span>치즈 추가 <b>+1,000원</b></button>
      <div className={styles.quantity}><span>수량</span><button aria-label="수량 줄이기" disabled={quantity === 1} onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><b aria-live="polite">{quantity}</b><button aria-label="수량 늘리기" disabled={quantity === 9} onClick={() => setQuantity(Math.min(9, quantity + 1))}>+</button></div>
      <div className={styles.orderTotal} aria-live="polite"><ShoppingCart />{((12900 + (cheese ? 1000 : 0)) * quantity).toLocaleString("ko-KR")}원 담기</div>
    </div>
    <p className={styles.demoHint}>HTML 동작 예시 · Figma에서 동작을 만들려면 별도 설정이 필요합니다.</p>
  </div>;
}

function TopicDemo({ page }: { page: number }) {
  if (page >= 12 && page <= 14) return <PropertyDemo mode="variant" />;
  if (page >= 15 && page <= 17) return <PropertyDemo mode="boolean" />;
  if (page >= 18 && page <= 21) return <HierarchyDemo assets={page < 20} />;
  if (page >= 22 && page <= 26) return <FoodDemo />;
  if (page >= 27 && page <= 34) return <PropertyDemo mode="swap" />;
  return <RelationDemo />;
}

function ShortcutTable({ lines }: { lines: string[] }) {
  return <table className={styles.shortcutTable}><thead><tr><th>기능</th><th>Windows</th><th>Mac</th></tr></thead><tbody>{lines.map(line => {
    const split = line.match(/^(.*?)\s+Win(?:dows)?:\s*(.*?)\s*\/?\s*Mac:\s*(.*)$/);
    return split ? <tr key={line}><th scope="row">{split[1]}</th><td><kbd>{split[2].replace(/\s*\/$/, "")}</kbd></td><td><kbd>{split[3]}</kbd></td></tr> : <tr key={line}><td colSpan={3}>{line}</td></tr>;
  })}</tbody></table>;
}

export function ComponentPresentation({ slide }: { slide: ComponentLessonSlide }) {
  const [checked, setChecked] = useState<number[]>([]);
  const cover = slide.kind === "cover";
  const checklist = slide.kind === "checklist";
  const number = String(slide.sourcePage).padStart(2, "0");
  return <div className={styles.container}><article className={`${styles.slide} ${cover ? styles.cover : ""} ${checklist ? styles.checklistSlide : ""}`} data-component-slide={slide.id} aria-label={slide.title}>
    <div className={styles.sideBar} aria-hidden="true"><span>FIGMA CLASS 02 / COMPONENT SYSTEM</span></div>
    {cover ? <div className={styles.coverLayout}>
      <div className={styles.coverCopy}><p className={styles.eyebrow}>FIGMA CLASS · 2기 2회차</p><h2>Component<br /><em>&amp; Instance.</em></h2><div className={styles.coverRule} /><h3>{slide.body[0]}</h3><p>{slide.body[1]}</p><span className={styles.platforms}>{slide.body[2]}</span><a href={sessionConfig.attachments[0].url} target="_blank" rel="noopener noreferrer">실습자료 열기 <ArrowRight /></a></div>
      <div className={styles.coverVisual}><span className={styles.visualIndex}>01 → MANY</span><RelationDemo /><p className={styles.coverVisualCaption}>DESIGN ONCE. BUILD TOGETHER.</p></div>
    </div> : <>
      <header className={styles.header}><p className={styles.eyebrow}>FIGMA CLASS 02 <span>/ {slide.eyebrow}</span></p><h2>{slide.title}</h2></header>
      {slide.kind === "agenda" ? <div className={styles.agendaContent}><p>{slide.body[0]}</p><ol className={styles.agenda}>{slide.body.slice(1).map((line, index) => <li key={line} style={{ "--step": index } as CSSProperties}><b>{line.slice(0, 2)}.</b><span>{line.slice(3)}</span><ArrowRight /></li>)}</ol></div>
        : slide.kind === "shortcuts" ? <div className={styles.shortcutsContent}><div><p className={styles.serifLabel}>Work<br /><em>smarter.</em></p><p>자주 쓰는 기능부터<br />손에 익혀 보세요.</p><span>WINDOWS / MAC</span></div><ShortcutTable lines={slide.body} /></div>
        : <div className={styles.bodyLayout}>
          <ol className={`${styles.points} ${slide.kind === "practice" ? styles.practice : ""}`}>
            {slide.body.map((line, index) => <li key={line} style={{ "--step": index } as CSSProperties}>
              {checklist ? <button className={styles.checkButton} aria-pressed={checked.includes(index)} aria-label={`${line} 확인`} onClick={() => setChecked(previous => previous.includes(index) ? previous.filter(item => item !== index) : [...previous, index])}>{checked.includes(index) ? <Check /> : String(index + 1).padStart(2, "0")}</button> : <span className={styles.marker}>{String(index + 1).padStart(2, "0")}</span>}
              <p className={checked.includes(index) ? styles.completed : ""}>{line.replace(/^\d+\.\s*/, "")}</p>
            </li>)}
          </ol>
          <aside className={styles.visual} aria-label="개념 시각화와 인터랙티브 예제">{checklist ? <div className={styles.progressVisual}><div className={styles.progressRing} style={{ "--progress": `${checked.length / slide.body.length * 100}%` } as CSSProperties}><span><b>{checked.length}<small> / {slide.body.length}</small></b><span>COMPLETE</span></span></div><h3>{checked.length === slide.body.length ? "잘했어요!" : "하나씩 확인해 보세요."}</h3><p>왼쪽 번호를 누르면 완료로 표시됩니다.</p></div> : <TopicDemo page={slide.sourcePage} />}</aside>
        </div>}
      {slide.shortcuts.length > 0 && <aside className={styles.shortcutStrip} aria-label="단축키와 실행 안내">{slide.shortcuts.map(line => <p key={line}><span>↳</span>{line}</p>)}</aside>}
    </>}
    <footer className={styles.footer}><span>DIPEATIT <i /> FIGMA CLASS</span><span>{slide.kind === "practice" ? "LEARN BY DOING" : "COMPONENT & INSTANCE"}</span><b>{number}<span> / 40</span></b></footer>
    <div className={styles.pageProgress} style={{ width: `${slide.sourcePage / 40 * 100}%` }} />
  </article></div>;
}
