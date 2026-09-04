export type ComponentLessonSlide = {
  id: string;
  sourcePage: number;
  title: string;
  kind: "cover" | "agenda" | "lesson" | "practice" | "checklist" | "shortcuts";
  eyebrow: string;
  body: string[];
  shortcuts: string[];
};

// Content source: Figma_Component_수업자료_Instance_Swap_포함_최종.pdf.
// One source page per section; UI copy stays selectable and editable.
export const componentLessonSlides: ComponentLessonSlide[] = [
  {
    "id": "section-01",
    "sourcePage": 1,
    "title": "Figma Component 수업",
    "kind": "cover",
    "eyebrow": "수업 안내",
    "body": [
      "Component와 Instance부터 푸드 주문 앱 실습까지",
      "반복되는 UI를 재사용하고 수정하기 쉬운 구조로 만들기",
      "Windows · Mac 단축키 포함"
    ],
    "shortcuts": []
  },
  {
    "id": "section-02",
    "sourcePage": 2,
    "title": "수업 목표와 진행 순서",
    "kind": "agenda",
    "eyebrow": "수업 안내",
    "body": [
      "목표: 원본과 인스턴스의 관계를 이해하고 반복 UI를 관리한다.",
      "01 개념 이해",
      "02 Component 만들기",
      "03 Assets 활용",
      "04 Variant 설정",
      "05 Boolean Property",
      "06 이름과 계층 관리",
      "07 Nested Component",
      "08 푸드 주문 앱 실습",
      "09 Text Property",
      "10 Instance Swap"
    ],
    "shortcuts": []
  },
  {
    "id": "section-03",
    "sourcePage": 3,
    "title": "단축키 사용 준비",
    "kind": "lesson",
    "eyebrow": "수업 안내",
    "body": [
      "Windows는 Ctrl·Alt, Mac은 Cmd(Command)·Option으로 표기한다.",
      "같은 기능도 운영체제별 키 조합을 확인한다.",
      "텍스트 입력 중에는 입력을 마치고 캔버스에 초점을 둔다.",
      "키보드 배열에 따라 다르면 Help의 Keyboard shortcuts를 확인한다.",
      "기능을 찾기 어려울 때는 Actions 메뉴에서 이름으로 검색한다."
    ],
    "shortcuts": [
      "Actions 열기 Windows: Ctrl + K     Mac: Cmd + K"
    ]
  },
  {
    "id": "section-04",
    "sourcePage": 4,
    "title": "01. Component와 Instance",
    "kind": "lesson",
    "eyebrow": "Component와 Instance",
    "body": [
      "Component: 반복 UI의 디자인과 구조를 관리하는 원본",
      "Instance: 원본과 연결된 채 실제 화면에서 사용하는 객체",
      "원본의 변경사항은 연결된 Instance에 반영된다.",
      "Instance에서 따로 바꾼 속성(Override)은 유지될 수 있다.",
      "예: Button 원본 하나로 로그인·회원가입·주문하기 버튼 사용"
    ],
    "shortcuts": []
  },
  {
    "id": "section-05",
    "sourcePage": 5,
    "title": "실습 1. 일반 Frame과 Component 비교",
    "kind": "practice",
    "eyebrow": "Component와 Instance",
    "body": [
      "1. 일반 Frame 버튼을 만들고 3개로 복제한다.",
      "2. 별도 버튼 하나를 Component로 만든다.",
      "3. Assets에서 꺼내거나 Alt/Option 드래그로 Instance 3개를 만든다.",
      "4. 일반 Frame 하나와 Component 원본의 배경색을 각각 바꾼다.",
      "5. 어느 버튼에 변경이 반영되는지 비교한다."
    ],
    "shortcuts": [
      "일반 Frame 복제 Windows: Ctrl + D     Mac: Cmd + D"
    ]
  },
  {
    "id": "section-06",
    "sourcePage": 6,
    "title": "02. Button Component의 기본 구조",
    "kind": "lesson",
    "eyebrow": "Component와 Instance",
    "body": [
      "Button 안에 Icon과 Label을 배치한다.",
      "Icon은 필요에 따라 숨길 수 있는 요소로 준비한다.",
      "Label은 버튼의 목적을 설명하는 텍스트다.",
      "Auto Layout으로 두 요소를 가로로 정렬한다.",
      "처음에는 하나의 기본 버튼을 완성한 뒤 상태를 확장한다."
    ],
    "shortcuts": [
      "텍스트 도구 Windows: T     Mac: T"
    ]
  },
  {
    "id": "section-07",
    "sourcePage": 7,
    "title": "실습 2. Auto Layout 버튼 만들기",
    "kind": "practice",
    "eyebrow": "Component와 Instance",
    "body": [
      "1. Label 텍스트와 Icon 요소를 준비하고 함께 선택한다.",
      "2. Auto Layout을 적용하고 가로 방향으로 배치한다.",
      "3. Padding은 안쪽 여백, Gap은 요소 사이 간격으로 설정한다.",
      "4. Radius·Fill·텍스트 스타일을 정한다.",
      "5. Label을 길게 바꿔 버튼 크기와 정렬이 유지되는지 확인한다."
    ],
    "shortcuts": [
      "Auto Layout 추가 Windows: Shift + A     Mac: Shift + A"
    ]
  },
  {
    "id": "section-08",
    "sourcePage": 8,
    "title": "실습 3. Component 생성과 이름 지정",
    "kind": "practice",
    "eyebrow": "Component와 Instance",
    "body": [
      "1. 완성한 버튼의 바깥 Frame을 선택한다.",
      "2. Create component를 실행한다.",
      "3. 이름을 Button / Primary로 지정한다.",
      "4. 레이어 패널에서 일반 Frame과 Component 아이콘을 비교한다.",
      "확인: Auto Layout은 배치 규칙, Component는 재사용 원본이다."
    ],
    "shortcuts": [
      "Component 생성 Windows: Ctrl + Alt + K     Mac: Cmd + Option + K"
    ]
  },
  {
    "id": "section-09",
    "sourcePage": 9,
    "title": "03. Assets에서 Instance 가져오기",
    "kind": "lesson",
    "eyebrow": "Component와 Instance",
    "body": [
      "1. Assets 탭을 열고 Button을 검색한다.",
      "2. Component를 캔버스로 드래그해 Instance를 만든다.",
      "3. Instance를 복제해 버튼 3개를 배치한다.",
      "4. Label을 로그인·회원가입·주문하기로 바꾼다.",
      "5. 원본의 Radius를 바꾸고 세 버튼의 변화를 확인한다."
    ],
    "shortcuts": [
      "Assets 열기 Windows: Alt + 2     Mac: Option + 2"
    ]
  },
  {
    "id": "section-10",
    "sourcePage": 10,
    "title": "Instance 수정과 원본 확인",
    "kind": "lesson",
    "eyebrow": "Component와 Instance",
    "body": [
      "Override: 특정 Instance의 텍스트나 허용된 속성을 변경한다.",
      "Go to main component: 연결된 원본으로 이동한다.",
      "Reset all changes: Instance의 개별 변경을 원본 기준으로 되돌린다.",
      "원본 확인과 초기화는 Instance의 우클릭·속성 메뉴에서 실행한다.",
      "실습: Label을 바꾼 뒤 복제본 하나에서만 초기화 결과를 확인한다."
    ],
    "shortcuts": [
      "Instance 복제 Windows: Ctrl + D     Mac: Cmd + D"
    ]
  },
  {
    "id": "section-11",
    "sourcePage": 11,
    "title": "Detach Instance와 주의사항",
    "kind": "lesson",
    "eyebrow": "Component와 Instance",
    "body": [
      "Detach instance는 원본과의 연결을 해제한다.",
      "해제한 객체는 일반 Frame이 되며 현재 모양은 유지한다.",
      "이후 원본을 수정해도 연결을 해제한 객체는 따라 바뀌지 않는다.",
      "실습용 복제본 하나에서만 실행하고 원본 수정 결과를 비교한다.",
      "재사용 구조를 유지해야 하는 최종 결과물에는 불필요한 해제를 피한다."
    ],
    "shortcuts": [
      "연결 해제 Windows: Ctrl + Alt + B     Mac: Cmd + Option + B"
    ]
  },
  {
    "id": "section-12",
    "sourcePage": 12,
    "title": "04. Variant와 Component Set",
    "kind": "lesson",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "Variant는 같은 역할의 여러 형태·상태를 관리하는 방법이다.",
      "Component Set은 관련 Variant Component를 묶은 컨테이너다.",
      "Type: Primary / Secondary",
      "State: Default / Disabled",
      "이 수업에서는 Type 2개 × State 2개, 총 4가지 조합으로 시작한다."
    ],
    "shortcuts": [
      "기능 검색 Windows: Ctrl + K     Mac: Cmd + K"
    ]
  },
  {
    "id": "section-13",
    "sourcePage": 13,
    "title": "실습 4. Button Variant 설정",
    "kind": "practice",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "1. Primary와 Secondary 버튼을 각각 Component로 준비한다.",
      "2. 두 Component를 선택하고 Combine as variants를 실행한다.",
      "3. Set 이름을 Button, 속성 이름을 Type으로 정리한다.",
      "4. Set 안의 Variant를 복제하고 State 속성을 추가한다.",
      "5. 네 조합의 Type·State 값을 중복 없이 지정한다."
    ],
    "shortcuts": [
      "Set 내부 Variant 복제 Windows: Ctrl + D     Mac: Cmd + D"
    ]
  },
  {
    "id": "section-14",
    "sourcePage": 14,
    "title": "Variant 검증과 확장",
    "kind": "lesson",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "Primary / Default, Primary / Disabled 조합을 확인한다.",
      "Secondary / Default, Secondary / Disabled 조합도 확인한다.",
      "Instance를 꺼내 Type과 State를 각각 변경해 본다.",
      "기본 조합이 안정되면 Ghost·Pressed 같은 값으로 확장한다.",
      "Disabled 모양만으로 클릭 차단이 구현되지는 않는다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-15",
    "sourcePage": 15,
    "title": "05. Boolean Property",
    "kind": "lesson",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "Boolean은 True / False, 두 값으로 상태를 표현한다.",
      "Figma Boolean Property는 레이어의 표시·숨김을 제어한다.",
      "Show Icon = True이면 아이콘을 표시한다.",
      "Show Icon = False이면 아이콘을 숨긴다.",
      "표시 여부만 다를 때 별도의 Variant 조합을 늘리지 않아도 된다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-16",
    "sourcePage": 16,
    "title": "실습 5. Show Icon 연결",
    "kind": "practice",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "1. 원본 Component 또는 Set에서 Boolean 속성을 만든다.",
      "2. 이름을 Show Icon으로 정하고 기본값을 선택한다.",
      "3. 내부 Icon 레이어의 표시 여부에 Show Icon을 연결한다.",
      "4. Variant가 여러 개라면 각 Variant의 Icon에도 연결한다.",
      "5. Instance에서 토글을 바꾸고 버튼의 간격·크기를 확인한다."
    ],
    "shortcuts": [
      "중첩 레이어 직접 선택 Windows: Ctrl + 클릭 Mac: Cmd + 클릭"
    ]
  },
  {
    "id": "section-17",
    "sourcePage": 17,
    "title": "Variant와 Boolean의 차이",
    "kind": "lesson",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "Variant: 종류·선택 상태처럼 모양이나 구성이 다른 경우",
      "Boolean: 아이콘·이미지·설명처럼 요소의 표시 여부만 바뀌는 경우",
      "Chip과 Option의 Selected=True/False는 이 수업에서 Variant 값이다.",
      "True/False라는 이름만으로 Boolean Property가 되지는 않는다.",
      "Card 확장 예: Show Image, Show Badge, Show Description"
    ],
    "shortcuts": []
  },
  {
    "id": "section-18",
    "sourcePage": 18,
    "title": "06. Component 이름과 계층 관리",
    "kind": "lesson",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "아이콘 이름 예: icons/home, icons/search, icons/heart",
      "추가 예: icons/cart, icons/user, icons/close",
      "방향 아이콘 예: icons/arrow-left, icons/arrow-right",
      "슬래시(/)로 분류하고 대소문자와 단어 규칙을 통일한다.",
      "이름으로 정리하는 것과 Combine as variants로 묶는 것은 구분한다."
    ],
    "shortcuts": [
      "이름 바꾸기 Windows: Ctrl + R     Mac: Cmd + R"
    ]
  },
  {
    "id": "section-19",
    "sourcePage": 19,
    "title": "실습 6. Assets 정리와 검색",
    "kind": "practice",
    "eyebrow": "Variant와 속성 설계",
    "body": [
      "1. Icon Component의 이름을 icons/이름 형식으로 정리한다.",
      "2. Assets에서 icons 또는 개별 이름을 검색한다.",
      "3. 필요한 아이콘을 꺼내 이름만으로 찾을 수 있는지 확인한다.",
      "4. Card는 card/product, card/category, card/review로 분류한다.",
      "5. Button Set의 Type·State 값에도 일관된 이름을 사용한다."
    ],
    "shortcuts": [
      "이름 변경 Win: Ctrl + R / Mac: Cmd + R",
      "Assets 열기 Win: Alt + 2 / Mac: Option + 2"
    ]
  },
  {
    "id": "section-20",
    "sourcePage": 20,
    "title": "07. Nested Component",
    "kind": "lesson",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "Nested Component는 Component 안에 다른 Instance를 넣는 구조다.",
      "Icon Instance를 Button 안에 넣는다.",
      "Button과 Badge Instance를 Product Card 안에 넣는다.",
      "Product Card Instance를 반복해 Product List를 구성한다.",
      "작은 원본의 변경이 연결된 상위 UI에 어떻게 반영되는지 확인한다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-21",
    "sourcePage": 21,
    "title": "실습 7. Product Card 조합",
    "kind": "practice",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "1. Product Image와 상품 정보 영역을 준비한다.",
      "2. 상품 정보에 Product Name·Description·Price를 배치한다.",
      "3. 기존 Badge와 Button Instance를 내부에 넣는다.",
      "4. 세로 Auto Layout을 적용하고 card/product로 Component화한다.",
      "5. Card Instance를 복제해 상품명·가격을 다르게 적용한다."
    ],
    "shortcuts": [
      "Auto Layout  Win / Mac: Shift + A",
      "Component 생성 Win: Ctrl + Alt + K / Mac: Cmd + Option + K"
    ]
  },
  {
    "id": "section-22",
    "sourcePage": 22,
    "title": "08. 푸드 주문 앱 실습 범위",
    "kind": "lesson",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "메뉴 상세 화면에서 반복 UI를 조합한다.",
      "필수: Icon, Button, Chip, Option, Quantity",
      "상품 정보와 Badge를 포함하고 기존 Component를 활용한다.",
      "Bottom Navigation은 별도 조합 연습 또는 화면 확장에 사용한다.",
      "평가 기준: 화면 완성과 함께 재사용·수정 가능한 구조를 확인한다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-23",
    "sourcePage": 23,
    "title": "제작할 Component와 속성",
    "kind": "lesson",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "Icon: arrow-left, heart, cart, minus, plus, home, search, user",
      "Button: Type=Primary/Secondary, State=Default/Disabled",
      "Button: Boolean Property인 Show Icon=True/False",
      "Chip·Option: Variant Property인 Selected=True/False",
      "Quantity: Minus·Number·Plus / Navigation: Home·Search·Favorite·My"
    ],
    "shortcuts": []
  },
  {
    "id": "section-24",
    "sourcePage": 24,
    "title": "메뉴 상세 화면의 내용 구성",
    "kind": "lesson",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "상단: 뒤로가기·좋아요 아이콘과 음식 이미지",
      "상품: 베스트 Badge, 트러플 치즈 버거, 평점 4.8·리뷰 238",
      "가격: 12,900원 / 옵션: 기본·치즈 추가 1,000원·패티 추가 2,500원",
      "수량: Minus, Number 1, Plus",
      "주문 버튼: 치즈 추가·수량 1 기준으로 13,900원 담기"
    ],
    "shortcuts": []
  },
  {
    "id": "section-25",
    "sourcePage": 25,
    "title": "실습 8. 화면 조립",
    "kind": "practice",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "1. 모바일 Frame을 만들고 상단·상품 정보 영역을 배치한다.",
      "2. Assets에서 필요한 Icon·Badge·Button Instance를 가져온다.",
      "3. Option Instance를 반복 배치하고 Selected 값을 지정한다.",
      "4. Quantity를 조합하고 하단 주문 버튼을 배치한다.",
      "5. 전체 간격을 정리하고 원본을 수정해 반영 여부를 확인한다."
    ],
    "shortcuts": [
      "Frame 도구 Win / Mac: F",
      "선택 영역 확대 Win / Mac: Shift + 2"
    ]
  },
  {
    "id": "section-26",
    "sourcePage": 26,
    "title": "실습 범위와 동작 구현의 구분",
    "kind": "practice",
    "eyebrow": "재사용 UI 조립",
    "body": [
      "Selected Variant를 바꾸는 작업은 화면의 선택 모양을 정한다.",
      "옵션 클릭·수량 증감·자동 합계 계산은 추가 구현이 필요하다.",
      "기본 실습에서는 선택 상태와 금액을 직접 설정한다.",
      "추가 실습에서는 Prototype 연결과 Variables를 활용할 수 있다.",
      "예: 치즈 추가·수량 1의 합계는 12,900 + 1,000 = 13,900원"
    ],
    "shortcuts": []
  },
  {
    "id": "section-27",
    "sourcePage": 27,
    "title": "09. Text Property",
    "kind": "lesson",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "Text Property는 수정할 문구를 속성 패널에 표시한다.",
      "Button 안의 Label을 버튼 바깥에서 쉽게 변경할 수 있다.",
      "예: 같은 버튼을 장바구니 담기·찜하기·검색으로 활용한다.",
      "원본에서 속성을 만들고 실제 텍스트 레이어에 연결해야 한다.",
      "일반 텍스트 Override와 달리 수정할 항목을 명확히 안내한다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-28",
    "sourcePage": 28,
    "title": "실습 9. Label 속성 연결",
    "kind": "practice",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "1. Button 원본 또는 Set의 Properties에서 Text를 추가한다.",
      "2. 이름은 Label, 기본 문구는 장바구니 담기로 설정한다.",
      "3. 내부 텍스트의 Text 영역에서 Apply variable/property를 선택한다.",
      "4. Label 속성을 연결하고 다른 Variant의 텍스트에도 적용한다.",
      "5. Button Instance에서 Label을 바꿔 크기와 정렬을 확인한다."
    ],
    "shortcuts": [
      "내부 레이어 선택 Windows: Ctrl + 클릭 Mac: Cmd + 클릭"
    ]
  },
  {
    "id": "section-29",
    "sourcePage": 29,
    "title": "10. Instance Swap",
    "kind": "lesson",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "Instance Swap은 사용 중인 Instance를 다른 Component로 교체한다.",
      "예: Button 안의 cart 아이콘을 heart 아이콘으로 바꾼다.",
      "교체한 아이콘은 새로 선택한 원본 Component와 연결된다.",
      "버튼 전체를 Detach하거나 아이콘마다 버튼을 새로 만들 필요가 없다.",
      "교체 대상 아이콘은 일반 벡터가 아닌 Component Instance로 준비한다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-30",
    "sourcePage": 30,
    "title": "실습 10-1. 아이콘 직접 교체",
    "kind": "practice",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "1. icons/cart, icons/heart, icons/search Component를 준비한다.",
      "2. 크기와 중심 정렬 기준을 맞추고 cart Instance를 Button 안에 넣는다.",
      "3. 화면의 Button Instance 내부에서 아이콘 Instance를 선택한다.",
      "4. 오른쪽 Instance 메뉴에서 heart를 검색해 교체한다.",
      "5. 아이콘 크기·간격과 Label이 유지되는지 확인한다."
    ],
    "shortcuts": [
      "아이콘 직접 선택 Windows: Ctrl + 클릭 Mac: Cmd + 클릭"
    ]
  },
  {
    "id": "section-31",
    "sourcePage": 31,
    "title": "실습 10-2. Icon 속성 만들기",
    "kind": "practice",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "1. Button 원본 또는 Set의 Properties에서 Instance swap을 추가한다.",
      "2. 속성 이름은 Icon, 기본값은 icons/cart로 지정한다.",
      "3. 원본 내부 Icon Instance를 선택한다.",
      "4. Apply instance swap property에서 Icon 속성을 연결한다.",
      "5. 각 Variant에도 연결하고 Button Instance에서 Icon을 바꿔 본다."
    ],
    "shortcuts": [
      "속성 생성·연결은 오른쪽 패널에서 실행한다. Windows·Mac 공통"
    ]
  },
  {
    "id": "section-32",
    "sourcePage": 32,
    "title": "Preferred instances와 Boolean 함께 쓰기",
    "kind": "lesson",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "Icon 속성의 추천 목록에 cart·heart·search를 등록한다.",
      "Preferred instances는 교체할 후보를 먼저 보여 주는 추천 목록이다.",
      "목록 외의 사용 가능한 Component를 검색하는 것도 가능하다.",
      "Show Icon은 표시 여부, Icon은 교체할 Component를 정한다.",
      "아이콘을 바꾼 뒤 Show Icon을 껐다 켜서 두 속성을 확인한다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-33",
    "sourcePage": 33,
    "title": "실습 10-3. 푸드 주문 앱에 적용",
    "kind": "practice",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "1. Button Instance 3개를 준비한다.",
      "2. cart + 장바구니 담기, heart + 찜하기로 각각 설정한다.",
      "3. 세 번째 버튼은 search + 메뉴 검색으로 설정한다.",
      "4. Type·State를 바꾸며 Label과 Icon의 유지 여부를 확인한다.",
      "5. Product Card 안의 Button에도 적용하고 원본 연결을 확인한다."
    ],
    "shortcuts": [
      "Instance 복제 Windows: Ctrl + D     Mac: Cmd + D"
    ]
  },
  {
    "id": "section-34",
    "sourcePage": 34,
    "title": "Instance Swap의 드래그 조작",
    "kind": "lesson",
    "eyebrow": "Text와 Instance Swap",
    "body": [
      "Assets에서 교체할 Component를 기존 Instance 위로 드래그한다.",
      "일반 대상: Windows는 Alt, Mac은 Option을 누른 채 드래그한다.",
      "중첩 대상: Windows는 Ctrl + Alt, Mac은 Cmd + Option을 누른다.",
      "대상이 맞는지 확인하고 마우스를 먼저 놓은 뒤 보조 키를 놓는다.",
      "속성 생성과는 별개 조작이다. 교체 후 크기·스타일을 다시 확인한다.",
      "추천: 수업에서는 Icon 속성 메뉴로 먼저 익힌 뒤 드래그를 연습한다."
    ],
    "shortcuts": []
  },
  {
    "id": "section-35",
    "sourcePage": 35,
    "title": "최종 실습 체크 1. 기본 구조",
    "kind": "checklist",
    "eyebrow": "최종 실습 점검",
    "body": [
      "Icon: icons/ 규칙으로 이름을 정리했는가?",
      "Button: 원본과 연결된 Instance를 사용했는가?",
      "Button 종류와 Disabled 상태: Type·State Variant로 관리하는가?",
      "아이콘 표시 여부: Show Icon Boolean을 연결했는가?",
      "Option 선택 상태: Selected Variant로 관리하는가?"
    ],
    "shortcuts": []
  },
  {
    "id": "section-36",
    "sourcePage": 36,
    "title": "최종 실습 체크 2. 재사용과 수정",
    "kind": "checklist",
    "eyebrow": "최종 실습 점검",
    "body": [
      "반복 UI: 일반 복제 Frame 대신 Instance를 사용했는가?",
      "Product Card: 내부에 Button 등 다른 Instance가 있는가?",
      "전체 화면: 기존 Component를 조합했는가?",
      "원본의 Radius·Fill을 바꾸면 연결된 Instance에 반영되는가?",
      "텍스트 길이·아이콘 숨김·Variant 변경에도 배치가 유지되는가?"
    ],
    "shortcuts": []
  },
  {
    "id": "section-37",
    "sourcePage": 37,
    "title": "최종 실습 체크 3. Component Property",
    "kind": "checklist",
    "eyebrow": "최종 실습 점검",
    "body": [
      "Text: Label 속성으로 버튼 문구를 변경할 수 있는가?",
      "Instance Swap: Icon 속성으로 cart·heart·search를 바꿀 수 있는가?",
      "Boolean: Show Icon으로 교체한 아이콘을 표시하거나 숨기는가?",
      "Variant: Type·State를 바꿔도 속성과 배치가 유지되는가?",
      "교체한 아이콘의 원본 연결과 크기·정렬을 확인했는가?"
    ],
    "shortcuts": []
  },
  {
    "id": "section-38",
    "sourcePage": 38,
    "title": "단축키 요약 1. 생성과 재사용",
    "kind": "shortcuts",
    "eyebrow": "Windows / Mac",
    "body": [
      "Component 생성 Windows: Ctrl + Alt + K / Mac: Cmd + Option + K",
      "Auto Layout 추가 Windows: Shift + A / Mac: Shift + A",
      "Assets 열기 Windows: Alt + 2 / Mac: Option + 2",
      "선택 객체 복제 Windows: Ctrl + D / Mac: Cmd + D",
      "원본에서 Instance 만들기 Windows: Alt + 드래그 / Mac: Option + 드래그"
    ],
    "shortcuts": []
  },
  {
    "id": "section-39",
    "sourcePage": 39,
    "title": "단축키 요약 2. 관리와 탐색",
    "kind": "shortcuts",
    "eyebrow": "Windows / Mac",
    "body": [
      "이름 변경 Windows: Ctrl + R / Mac: Cmd + R",
      "중첩 레이어 직접 선택 Windows: Ctrl + 클릭 / Mac: Cmd + 클릭",
      "Detach instance     Windows: Ctrl + Alt + B / Mac: Cmd + Option + B",
      "Actions 열기 Windows: Ctrl + K / Mac: Cmd + K",
      "전체 보기: Shift + 1 / 선택 영역 확대: Shift + 2     Windows·Mac 공통"
    ],
    "shortcuts": []
  },
  {
    "id": "section-40",
    "sourcePage": 40,
    "title": "단축키 요약 3. 기본 도구와 대체 경로",
    "kind": "shortcuts",
    "eyebrow": "Windows / Mac",
    "body": [
      "Frame 도구 Windows: F / Mac: F",
      "텍스트 도구 Windows: T / Mac: T",
      "Auto Layout 해제 Windows: Alt + Shift + A / Mac: Option + Shift + A",
      "Combine as variants·Boolean 생성은 해당 메뉴에서 실행한다.",
      "단축키가 다르게 작동하면 Keyboard shortcuts에서 배열을 확인한다."
    ],
    "shortcuts": []
  }
];
