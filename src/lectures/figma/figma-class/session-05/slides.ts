export type VariablesSlideKind =
  | "cover"
  | "list"
  | "grid"
  | "compare"
  | "hierarchy"
  | "types"
  | "palette"
  | "scale"
  | "locale"
  | "toggle"
  | "chain"
  | "mode"
  | "steps"
  | "practice"
  | "checklist"
  | "glossary"
  | "closing";

export type VariablesLessonSlide = {
  id: string;
  source: string;
  eyebrow: string;
  title: string;
  kind: VariablesSlideKind;
  items: string[];
};

// Source: Figma_Variables_수업자료.md. Source text is lesson material only.
export const variablesLessonSlides: VariablesLessonSlide[] = [
  { id: "section-01", source: "title", eyebrow: "피그마 · 5회차", title: "Figma Variables와 디자인 시스템", kind: "cover", items: ["값을 저장하는 기능을 넘어, 디자인 규칙을 설계하고 관리하는 방법", "Color · Number · String · Boolean", "Primitive → Semantic → Component → Screen"] },
  { id: "section-02", source: "0", eyebrow: "오늘의 목표", title: "오늘 수업이 끝나면", kind: "grid", items: ["Variable의 개념과 필요성을 설명할 수 있다", "4가지 Variable Type을 구분할 수 있다", "Collection과 Group으로 값을 구조화할 수 있다", "Primitive와 Semantic Token을 설계할 수 있다", "Alias와 Mode로 테마를 관리할 수 있다", "Component와 Prototype에 Variable을 연결할 수 있다"] },
  { id: "section-03", source: "1-1", eyebrow: "01 · Variable 기초", title: "Variable은 재사용 가능한 값입니다", kind: "list", items: ["색상, 숫자, 문자열, 참·거짓 값을 이름과 함께 저장합니다.", "여러 화면과 컴포넌트가 같은 값을 참조하도록 연결합니다.", "한 곳의 값을 바꾸면 연결된 디자인 전체가 함께 업데이트됩니다.", "디자인을 ‘개별 값의 모음’에서 ‘관리되는 규칙’으로 바꿉니다."] },
  { id: "section-04", source: "1-1", eyebrow: "01 · Variable 기초", title: "직접 입력과 Variable 연결의 차이", kind: "compare", items: ["직접 입력|Button A · #2563EB", "직접 입력|Button B · #2563EB", "직접 입력|Button C · #2563EB", "Variable 연결|color/primary → #2563EB", "Variable 연결|Button A · color/primary", "Variable 연결|Button B · color/primary", "Variable 연결|Button C · color/primary"] },
  { id: "section-05", source: "1-2", eyebrow: "01 · Variable 기초", title: "Variable을 사용하는 네 가지 이유", kind: "grid", items: ["일관성|같은 역할에는 같은 값을 사용", "수정 효율|Variable 한 곳만 바꾸면 전체 반영", "디자인 시스템|팀이 공유하는 규칙을 구축", "환경 관리|Light/Dark·언어·브랜드 전환"] },
  { id: "section-06", source: "2", eyebrow: "02 · 구조", title: "Variable의 기본 구조", kind: "hierarchy", items: ["Collection|Variables를 담는 가장 큰 관리 단위", "Group|Collection 안에서 역할별로 분류", "Variable|실제로 저장하고 재사용하는 값", "Mode|상황에 따라 바뀌는 값의 열"] },
  { id: "section-07", source: "3", eyebrow: "03 · Variable Type", title: "네 가지 값의 타입", kind: "types", items: ["Color|색상|#2563EB", "Number|숫자|16", "String|문자열|장바구니", "Boolean|참·거짓|true / false"] },
  { id: "section-08", source: "4-1", eyebrow: "04 · Color", title: "Color Variable", kind: "palette", items: ["blue/500|#3B82F6", "blue/600|#2563EB", "purple/600|#7C3AED", "gray/50|#F8FAFC", "gray/900|#0F172A", "red/500|#EF4444"] },
  { id: "section-09", source: "4-2", eyebrow: "04 · Color", title: "색상은 역할로 연결합니다", kind: "grid", items: ["배경|color/background", "텍스트|color/text/primary", "테두리|color/border", "버튼|color/action/primary", "아이콘|color/icon/default", "상태|color/feedback/error"] },
  { id: "section-10", source: "4-3", eyebrow: "실습 01", title: "Primary 색상 한 번에 바꾸기", kind: "practice", items: ["Button Frame을 만들고 Fill에 blue/600을 연결합니다.", "같은 Variable을 여러 버튼에 적용합니다.", "blue/600 값을 #2563EB에서 #7C3AED로 변경합니다.", "모든 버튼이 동시에 변경되는지 확인합니다.", "체크 포인트|직접 입력된 버튼이 남아 있지 않은가?"] },
  { id: "section-11", source: "5-1", eyebrow: "05 · Number", title: "Number Variable", kind: "scale", items: ["크기|size/icon/md · 24", "간격|spacing/4 · 16", "모서리|radius/md · 12", "선 두께|stroke/regular · 1", "투명도|opacity/disabled · 40"] },
  { id: "section-12", source: "5-2", eyebrow: "05 · Number", title: "Spacing Scale을 먼저 정합니다", kind: "scale", items: ["spacing/1|4", "spacing/2|8", "spacing/3|12", "spacing/4|16", "spacing/6|24", "spacing/8|32"] },
  { id: "section-13", source: "5-3,5-4", eyebrow: "05 · Number", title: "Radius와 Auto Layout에 연결하기", kind: "compare", items: ["Radius|radius/sm · 8", "Radius|radius/md · 12", "Radius|radius/lg · 20", "Auto Layout|Gap · spacing/3", "Auto Layout|Horizontal padding · spacing/4", "Auto Layout|Vertical padding · spacing/2"] },
  { id: "section-14", source: "6-1,6-2", eyebrow: "06 · String", title: "String Variable", kind: "list", items: ["텍스트 값을 저장하고 Text layer에 연결합니다.", "버튼 라벨, 상태 메시지, 메뉴 이름처럼 반복되는 문구를 관리합니다.", "같은 의미의 문구가 화면마다 달라지는 문제를 줄입니다.", "예: copy/button/buy → ‘구매하기’"] },
  { id: "section-15", source: "6-3", eyebrow: "06 · String", title: "Mode로 다국어 UI를 확인합니다", kind: "locale", items: ["Korean|구매하기|장바구니", "English|Buy now|Cart", "Japanese|今すぐ購入|カート"] },
  { id: "section-16", source: "7", eyebrow: "07 · Boolean", title: "Boolean Variable", kind: "toggle", items: ["true|보임 · 활성 · 선택됨", "false|숨김 · 비활성 · 선택 안 됨", "isLoggedIn|로그인 상태", "hasItems|장바구니 상품 여부", "isLiked|좋아요 상태"] },
  { id: "section-17", source: "8", eyebrow: "07 · Boolean", title: "Boolean Property와 Variable은 역할이 다릅니다", kind: "compare", items: ["Component Boolean Property|컴포넌트 인스턴스 안에서 레이어 표시 여부를 제어", "Component Boolean Property|예: Icon on/off, Badge on/off", "Boolean Variable|여러 화면과 Prototype에서 공유할 상태 값을 관리", "Boolean Variable|예: isLoggedIn, hasItems, isLiked"] },
  { id: "section-18", source: "9", eyebrow: "08 · Collection", title: "Collection은 값의 큰 주제입니다", kind: "hierarchy", items: ["Primitives|blue/600 · gray/900 · spacing/4", "Semantic Colors|color/primary · color/background", "Content|copy/button/buy · copy/menu/cart", "App State|isLoggedIn · cartCount · isLiked"] },
  { id: "section-19", source: "10", eyebrow: "08 · Group", title: "슬래시(/)로 Group을 만듭니다", kind: "hierarchy", items: ["color/primary|color 그룹 안의 primary", "color/text/primary|color > text > primary", "spacing/4|spacing 그룹 안의 4", "radius/card|radius 그룹 안의 card"] },
  { id: "section-20", source: "11", eyebrow: "09 · Design Token", title: "디자인 토큰은 규칙에 붙인 이름입니다", kind: "list", items: ["디자인에서 반복 사용하는 값을 이름으로 정의한 것입니다.", "토큰은 ‘값’과 ‘사용 목적’을 분리해 설명합니다.", "디자이너와 개발자가 같은 언어로 규칙을 공유하게 합니다.", "예: #2563EB보다 color/primary가 사용 의도를 더 잘 전달합니다."] },
  { id: "section-21", source: "12", eyebrow: "09 · Design Token", title: "Primitive Token은 실제 값입니다", kind: "palette", items: ["blue/600|#2563EB", "gray/50|#F8FAFC", "gray/900|#0F172A", "spacing/4|16", "radius/md|12", "opacity/disabled|40%"] },
  { id: "section-22", source: "13", eyebrow: "09 · Design Token", title: "Semantic Token은 값의 의미입니다", kind: "grid", items: ["color/primary|주요 행동 색상", "color/background|화면 배경", "color/text/primary|기본 본문", "color/text/inverse|반전 텍스트", "color/border|기본 테두리", "color/feedback/error|오류 상태"] },
  { id: "section-23", source: "14", eyebrow: "09 · Design Token", title: "값과 의미를 두 단계로 나눕니다", kind: "chain", items: ["blue/600|실제 값 · #2563EB", "color/primary|사용 의미 · 주요 행동", "Button/Primary|UI 구조", "구매하기|서비스 화면"] },
  { id: "section-24", source: "15", eyebrow: "10 · Alias", title: "Alias는 Variable이 다른 Variable을 참조하는 것", kind: "chain", items: ["blue/600|#2563EB", "color/primary|Alias → blue/600", "Button Fill|color/primary", "Primary Button|일관된 결과"] },
  { id: "section-25", source: "16", eyebrow: "10 · Alias", title: "Alias가 필요한 이유", kind: "grid", items: ["의미 분리|실제 값과 사용 목적을 분리", "교체 용이|Primitive만 바꿔 전체 테마 변경", "확장성|브랜드와 Mode 추가에 유연", "협업|이름만으로 의도를 공유"] },
  { id: "section-26", source: "17", eyebrow: "11 · Mode", title: "Mode는 같은 이름의 다른 값입니다", kind: "mode", items: ["Variable|Light|Dark", "color/background|#FFFFFF|#0F172A", "color/text/primary|#0F172A|#F8FAFC", "color/primary|#2563EB|#60A5FA"] },
  { id: "section-27", source: "18", eyebrow: "11 · Mode", title: "Light와 Dark가 같은 의미를 공유합니다", kind: "compare", items: ["Light|background · #FFFFFF", "Light|text/primary · #0F172A", "Light|primary · #2563EB", "Dark|background · #0F172A", "Dark|text/primary · #F8FAFC", "Dark|primary · #60A5FA"] },
  { id: "section-28", source: "19", eyebrow: "11 · Mode", title: "Mode는 테마보다 넓게 활용됩니다", kind: "grid", items: ["Color Theme|Light · Dark · High Contrast", "Device|Desktop · Tablet · Mobile", "Language|Korean · English · Japanese", "Brand|Brand A · Brand B", "Density|Comfortable · Compact", "State|Default · Sale · Event"] },
  { id: "section-29", source: "20", eyebrow: "12 · Components", title: "Component에 값을 연결합니다", kind: "chain", items: ["Variable|색상·간격·문구·상태", "Component|Button · Card · Navigation", "Instance|콘텐츠와 옵션 변경", "Screen|일관된 서비스 화면"] },
  { id: "section-30", source: "21", eyebrow: "12 · Components", title: "Component는 구조, Variable은 값", kind: "compare", items: ["Component|UI의 구조와 재사용", "Component|버튼의 아이콘·라벨·배치", "Component|Variant와 Property로 형태 변경", "Variable|UI에서 사용하는 값과 규칙", "Variable|색상·간격·문구·상태", "Variable|Mode와 Alias로 환경 변경"] },
  { id: "section-31", source: "22", eyebrow: "13 · Prototype", title: "Number Variable로 장바구니 수량을 바꿉니다", kind: "steps", items: ["Number Variable cartCount를 0으로 만듭니다.", "수량 Text에 cartCount를 연결합니다.", "+ 버튼에 Set variable → cartCount + 1을 설정합니다.", "− 버튼에 Set variable → cartCount - 1을 설정합니다.", "Preview에서 값이 실제로 변하는지 확인합니다."] },
  { id: "section-32", source: "23", eyebrow: "13 · Prototype", title: "Boolean Variable로 좋아요 상태를 바꿉니다", kind: "steps", items: ["Boolean Variable isLiked를 false로 만듭니다.", "하트 상태를 Boolean 또는 Conditional과 연결합니다.", "클릭 시 Set variable → !isLiked로 토글합니다.", "false는 빈 하트, true는 채운 하트로 표현합니다."] },
  { id: "section-33", source: "24", eyebrow: "13 · Prototype", title: "Conditional로 상태에 따라 분기합니다", kind: "compare", items: ["로그인|if isLoggedIn = true → 마이페이지", "로그인|else → 로그인 화면", "장바구니|if cartCount > 0 → 장바구니 화면", "장바구니|else → 빈 장바구니 안내"] },
  { id: "section-34", source: "25", eyebrow: "프로젝트", title: "모바일 쇼핑앱 디자인 시스템 만들기", kind: "practice", items: ["목표|Variables를 활용해 테마 전환이 가능한 쇼핑앱 UI를 만듭니다.", "대상|상품 카드 · 구매 버튼 · 장바구니 · 상태 메시지", "구조|Primitive → Semantic → Component → Screen", "완료 조건|Light/Dark 전환과 장바구니 Prototype이 동작한다"] },
  { id: "section-35", source: "26", eyebrow: "Project · Step 1", title: "Primitive Colors 만들기", kind: "practice", items: ["Collection ‘Primitives’를 만듭니다.", "blue/500 · blue/600 · blue/700을 추가합니다.", "gray/50 · gray/100 · gray/900을 추가합니다.", "각 값은 색상 이름과 단계만 표현합니다.", "금지|button-blue처럼 사용처를 Primitive 이름에 넣지 않습니다."] },
  { id: "section-36", source: "27", eyebrow: "Project · Step 2", title: "Semantic Colors 만들기", kind: "practice", items: ["Collection ‘Semantic’을 만듭니다.", "color/primary → blue/600으로 Alias합니다.", "color/background → gray/50으로 Alias합니다.", "color/text/primary → gray/900으로 Alias합니다.", "핵심|컴포넌트에는 Primitive 대신 Semantic을 연결합니다."] },
  { id: "section-37", source: "28", eyebrow: "Project · Step 3", title: "Spacing Scale 만들기", kind: "scale", items: ["spacing/1|4", "spacing/2|8", "spacing/3|12", "spacing/4|16", "spacing/6|24", "spacing/8|32"] },
  { id: "section-38", source: "29", eyebrow: "Project · Step 4", title: "Radius Scale 만들기", kind: "scale", items: ["radius/sm|8", "radius/md|12", "radius/lg|20", "radius/full|999", "Card|radius/md", "Button|radius/full"] },
  { id: "section-39", source: "30", eyebrow: "Project · Step 5", title: "Component에 Variable 적용하기", kind: "checklist", items: ["상품 카드 배경 → color/background", "상품명 → color/text/primary", "카드 padding → spacing/4", "카드 radius → radius/md", "구매 버튼 Fill → color/primary", "버튼 gap → spacing/2"] },
  { id: "section-40", source: "31", eyebrow: "Project · Step 6", title: "Light / Dark Mode 만들기", kind: "mode", items: ["Variable|Light|Dark", "color/background|gray/50|gray/900", "color/surface|#FFFFFF|#111827", "color/text/primary|gray/900|gray/50", "color/primary|blue/600|blue/500"] },
  { id: "section-41", source: "32", eyebrow: "Project · Step 7", title: "Dark Mode 테스트", kind: "checklist", items: ["화면 Frame의 Mode를 Dark로 전환합니다.", "직접 입력된 색상이 남아 있는지 확인합니다.", "텍스트와 배경의 대비를 확인합니다.", "버튼과 상태 색상이 의미를 유지하는지 확인합니다.", "수정은 Component가 아니라 Variable 구조에서 해결합니다."] },
  { id: "section-42", source: "33", eyebrow: "추가 실습", title: "장바구니 Prototype 만들기", kind: "practice", items: ["cartCount와 hasItems Variable을 만듭니다.", "담기 버튼 클릭 시 cartCount + 1을 설정합니다.", "cartCount > 0이면 장바구니 Badge를 표시합니다.", "수량이 0이면 빈 장바구니 화면을 보여줍니다.", "도전|좋아요 isLiked 상태도 함께 구현합니다."] },
  { id: "section-43", source: "34,37", eyebrow: "구조 정리", title: "Variables 활용 구조", kind: "chain", items: ["Primitive|실제 값 · blue/600", "Semantic|사용 의미 · color/primary", "Component|UI 구조 · Button/Primary", "Screen|서비스 맥락 · 구매 버튼"] },
  { id: "section-44", source: "35", eyebrow: "주의 사항", title: "좋은 시스템은 필요한 규칙만 만듭니다", kind: "checklist", items: ["모든 값을 Variable로 만들지 않습니다.", "팀이 이해할 수 있는 이름 규칙을 먼저 정합니다.", "Primitive와 Semantic을 섞지 않습니다.", "Component에는 가능한 Semantic Token을 연결합니다.", "중복 값보다 중복 의미를 먼저 찾습니다.", "Mode를 늘리기 전에 실제 사용 시나리오를 확인합니다."] },
  { id: "section-45", source: "36", eyebrow: "핵심 용어", title: "한 문장으로 다시 정의하기", kind: "glossary", items: ["Variable|디자인 값을 저장하고 재사용하는 기능", "Collection|Variable을 묶어 관리하는 단위", "Group|Collection 내부의 분류 구조", "Mode|한 Variable의 상황별 값", "Primitive|실제 값을 표현하는 기본 Token", "Semantic|값의 목적과 의미를 표현하는 Token", "Alias|다른 Variable을 참조하는 연결"] },
  { id: "section-46", source: "38", eyebrow: "수업 흐름", title: "오늘의 학습 여정", kind: "steps", items: ["Variable과 4가지 Type 이해", "Collection과 Group으로 구조화", "Primitive와 Semantic Token 설계", "Alias로 의미와 실제 값 연결", "Mode로 Light/Dark 전환", "Component와 Prototype에 적용", "쇼핑앱 프로젝트로 검증"] },
  { id: "section-47", source: "39", eyebrow: "5회차 마무리", title: "구조는 Component가, 값은 Variable이 관리합니다", kind: "closing", items: ["Variables는 색상을 저장하는 기능이 아닙니다.", "여러 화면과 컴포넌트에 디자인 규칙을 일관되게 적용하는 디자인 시스템의 핵심입니다.", "Primitive → Semantic → Component → Screen"] },
];
