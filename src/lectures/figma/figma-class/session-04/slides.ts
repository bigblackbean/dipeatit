export type PrototypeLessonSlide = {
  id: string;
  source: string;
  title: string;
  kind: "cover" | "lesson" | "grid" | "pipeline" | "steps" | "dense" | "table" | "keywords" | "practice" | "checklist";
  eyebrow: string;
  items: string[];
};

export const PROTOTYPE_MATERIAL_URL = "https://www.figma.com/design/jsLdJKWXESUZ4oYkxmtdQk/%ED%94%BC%EA%B7%B8%EB%A7%88_%EC%B2%AB%EC%8B%A4%EC%8A%B5?node-id=43-557&t=iSzvA3HWlIANxNuh-1";

// Source: Figma_Prototype_수업자료.md. Source text is lesson material only.
export const prototypeLessonSlides: PrototypeLessonSlide[] = [
  {
    "id": "section-01",
    "source": "title",
    "title": "Figma 프로토타입 제작",
    "kind": "cover",
    "eyebrow": "피그마 · 4회차",
    "items": [
      "정적인 화면에 사용자의 행동과 화면의 반응을 연결합니다.",
      "Trigger · Action · Destination · Animation",
      "Flow · Overlay · Smart Animate · Interactive Component"
    ]
  },
  {
    "id": "section-02",
    "source": "1",
    "title": "프로토타입이란?",
    "kind": "lesson",
    "eyebrow": "프로토타입 기초",
    "items": [
      "완성된 디자인 화면에 사용자의 행동과 화면의 반응을 연결하여 실제 서비스처럼 동작하도록 만드는 기능입니다.",
      "디자인 단계에서는 화면의 모양과 구조를 설계하고, 프로토타입 단계에서는 클릭하거나 화면을 넘겼을 때의 동작을 정의합니다.",
      "정적인 화면 → 사용 가능한 인터랙티브 화면",
      "실제 개발 전에 화면의 흐름과 사용성을 미리 확인할 수 있습니다."
    ]
  },
  {
    "id": "section-03",
    "source": "2",
    "title": "프로토타입을 만드는 이유",
    "kind": "grid",
    "eyebrow": "프로토타입 기초",
    "items": [
      "화면의 이동 순서가 자연스러운지 확인",
      "버튼과 메뉴의 동작을 미리 확인",
      "사용자 경험(User Experience)을 테스트",
      "개발자에게 화면 동작 방식 전달",
      "클라이언트나 팀원에게 완성될 서비스의 모습 시연",
      "실제 개발 전 오류나 불편한 흐름 발견"
    ]
  },
  {
    "id": "section-04",
    "source": "3",
    "title": "프로토타입의 기본 구조",
    "kind": "pipeline",
    "eyebrow": "프로토타입 기초",
    "items": [
      "Figma의 프로토타입은 기본적으로 다음 세 가지 요소로 구성됩니다.",
      "Trigger → Action → Animation",
      "각 항목의 의미는 다음과 같습니다.",
      "Trigger",
      "언제 동작할 것인가?",
      "사용자가 어떤 행동을 했을 때 프로토타입이 실행되는지를 설정합니다.",
      "Action",
      "무엇을 실행할 것인가?",
      "Trigger가 발생했을 때 어떤 화면으로 이동하거나 어떤 동작을 실행할지 설정합니다.",
      "Animation",
      "어떻게 보여줄 것인가?",
      "화면이나 요소가 변경될 때 어떤 방식으로 전환되는지를 설정합니다."
    ]
  },
  {
    "id": "section-05",
    "source": "4",
    "title": "Prototype 연결 방법",
    "kind": "steps",
    "eyebrow": "프로토타입 기초",
    "items": [
      "Figma에서는 화면 안의 버튼, 이미지, 카드 등의 요소를 다른 Frame과 연결하여 프로토타입을 제작합니다.",
      "기본적인 연결 과정은 다음과 같습니다.",
      "1. 동작을 적용할 요소 선택",
      "2. 오른쪽 패널에서 Prototype 선택",
      "3. 요소에 나타나는 Prototype 연결점을 드래그",
      "4. 이동할 Frame에 연결",
      "5. Trigger 설정",
      "6. Action 설정",
      "7. Destination 설정",
      "8. Animation 설정",
      "9. Preview를 통해 동작 확인",
      "이를 간단하게 정리하면 다음과 같습니다.",
      "요소 선택 → 화면 연결 → 행동 설정 → 동작 설정 → 전환 효과 설정"
    ]
  },
  {
    "id": "section-06",
    "source": "5",
    "title": "On Click",
    "kind": "dense",
    "eyebrow": "Trigger",
    "items": [
      "Trigger는 사용자의 어떤 행동을 기준으로 인터랙션을 실행할 것인지 결정합니다.",
      "사용자가 클릭하거나 드래그하거나 특정 시간이 지난 경우 등 다양한 조건을 설정할 수 있습니다.",
      "사용자가 요소를 클릭하거나 터치했을 때 동작합니다.",
      "가장 기본적이며 가장 많이 사용하는 Trigger입니다.",
      "사용 예시",
      "버튼 클릭",
      "메뉴 클릭",
      "카드 선택",
      "아이콘 선택",
      "링크 선택",
      "웹과 모바일 모두에서 가장 일반적으로 사용합니다."
    ]
  },
  {
    "id": "section-07",
    "source": "5",
    "title": "On Drag",
    "kind": "dense",
    "eyebrow": "Trigger",
    "items": [
      "사용자가 요소를 드래그했을 때 동작합니다.",
      "주로 모바일 화면에서 슬라이드 형식의 인터랙션을 만들 때 사용합니다.",
      "사용 예시",
      "이미지 슬라이드",
      "배너 슬라이드",
      "카드 넘기기",
      "화면 스와이프"
    ]
  },
  {
    "id": "section-08",
    "source": "5",
    "title": "While Hovering",
    "kind": "dense",
    "eyebrow": "Trigger",
    "items": [
      "마우스 커서를 요소 위에 올리고 있는 동안 동작합니다.",
      "주로 PC 웹사이트에서 Hover 효과를 구현할 때 사용합니다.",
      "사용 예시",
      "버튼 Hover",
      "메뉴 Hover",
      "이미지에 마우스를 올렸을 때 정보 표시",
      "카드 강조",
      "모바일 환경에서는 Hover가 없기 때문에 주로 PC 화면에서 사용합니다."
    ]
  },
  {
    "id": "section-09",
    "source": "5",
    "title": "While Pressing",
    "kind": "lesson",
    "eyebrow": "Trigger",
    "items": [
      "요소를 클릭하거나 누르고 있는 동안 동작합니다.",
      "버튼을 눌렀을 때의 Pressed 상태를 표현할 때 사용할 수 있습니다.",
      "예를 들어 버튼을 누르는 동안 색상이나 크기를 변경하여 실제 버튼을 누르는 느낌을 표현할 수 있습니다."
    ]
  },
  {
    "id": "section-10",
    "source": "5",
    "title": "After Delay",
    "kind": "dense",
    "eyebrow": "Trigger",
    "items": [
      "사용자의 직접적인 행동 없이 일정 시간이 지난 후 자동으로 동작합니다.",
      "사용 예시",
      "Splash 화면",
      "자동 화면 전환",
      "자동 슬라이드",
      "로딩 화면",
      "시간은 ms(밀리초) 단위로 지정합니다.",
      "예시:",
      "1000ms = 1초",
      "2000ms = 2초",
      "3000ms = 3초"
    ]
  },
  {
    "id": "section-11",
    "source": "5",
    "title": "Mouse Enter / Mouse Leave",
    "kind": "lesson",
    "eyebrow": "Trigger",
    "items": [
      "마우스가 특정 영역에 들어오거나 나갈 때 동작합니다.",
      "주로 웹 환경에서 세밀한 Hover 인터랙션을 표현할 때 사용합니다."
    ]
  },
  {
    "id": "section-12",
    "source": "6",
    "title": "Navigate To",
    "kind": "dense",
    "eyebrow": "Action",
    "items": [
      "Action은 Trigger가 실행된 후 어떤 일이 발생할 것인지 설정합니다.",
      "프로토타입에서 가장 중요한 설정 중 하나입니다.",
      "다른 Frame으로 이동합니다.",
      "프로토타입에서 가장 기본적인 화면 이동 방식입니다.",
      "주로 다음과 같은 경우 사용합니다.",
      "페이지 이동",
      "상세 화면 이동",
      "로그인 후 메인 화면 이동",
      "메뉴 선택 후 다른 페이지 이동",
      "화면 자체가 다른 화면으로 변경되는 경우에는 일반적으로 Navigate To를 사용합니다."
    ]
  },
  {
    "id": "section-13",
    "source": "6",
    "title": "Back",
    "kind": "lesson",
    "eyebrow": "Action",
    "items": [
      "사용자가 이전에 보고 있던 화면으로 돌아갑니다.",
      "특정 Frame을 지정하지 않아도 이전 화면으로 이동할 수 있다는 특징이 있습니다.",
      "주로 다음 UI에 사용합니다.",
      "뒤로가기 버튼",
      "이전 페이지",
      "상세 화면에서 목록으로 돌아가기"
    ]
  },
  {
    "id": "section-14",
    "source": "6",
    "title": "Open Overlay",
    "kind": "dense",
    "eyebrow": "Action",
    "items": [
      "현재 화면을 유지하면서 그 위에 새로운 Frame을 표시합니다.",
      "전체 화면을 이동하는 것이 아니라 현재 화면 위에 새로운 UI가 올라오는 방식입니다.",
      "주로 다음과 같은 UI에서 사용합니다.",
      "Modal",
      "Popup",
      "Bottom Sheet",
      "Dropdown",
      "메뉴",
      "알림창",
      "확인창",
      "Navigate To와 Overlay의 차이",
      "Navigate To",
      "기존 화면에서 새로운 화면으로 완전히 이동합니다.",
      "Open Overlay",
      "기존 화면은 그대로 유지되고 그 위에 새로운 화면이 표시됩니다."
    ]
  },
  {
    "id": "section-15",
    "source": "6",
    "title": "Close Overlay",
    "kind": "lesson",
    "eyebrow": "Action",
    "items": [
      "현재 열려 있는 Overlay를 닫습니다.",
      "주로 다음 요소에 연결합니다.",
      "닫기 버튼",
      "X 버튼",
      "취소 버튼",
      "Overlay 바깥 영역"
    ]
  },
  {
    "id": "section-16",
    "source": "6",
    "title": "Swap Overlay",
    "kind": "lesson",
    "eyebrow": "Action",
    "items": [
      "현재 열려 있는 Overlay를 다른 Overlay로 변경합니다.",
      "여러 개의 팝업이나 메뉴 상태를 전환할 때 사용할 수 있습니다."
    ]
  },
  {
    "id": "section-17",
    "source": "6",
    "title": "Scroll To",
    "kind": "dense",
    "eyebrow": "Action",
    "items": [
      "같은 화면 안에서 특정 위치로 이동합니다.",
      "긴 페이지나 웹사이트에서 특정 영역으로 바로 이동할 때 사용합니다.",
      "사용 예시",
      "상단 메뉴 클릭 → 해당 섹션으로 이동",
      "목차 클릭 → 특정 콘텐츠 위치로 이동",
      "페이지 하단 이동",
      "위로 가기 버튼"
    ]
  },
  {
    "id": "section-18",
    "source": "6",
    "title": "Change To",
    "kind": "dense",
    "eyebrow": "Action",
    "items": [
      "Interactive Component에서 현재 Component를 다른 Variant 상태로 변경합니다.",
      "주로 Component의 상태 변화에 사용합니다.",
      "사용 예시",
      "Default → Hover",
      "Default → Pressed",
      "OFF → ON",
      "펼침 → 접힘",
      "선택 전 → 선택 후",
      "Change To는 일반적인 Frame 이동보다 Component 내부의 상태 변화를 표현할 때 사용합니다."
    ]
  },
  {
    "id": "section-19",
    "source": "7",
    "title": "Destination",
    "kind": "lesson",
    "eyebrow": "Animation과 연결",
    "items": [
      "Destination은 Action 실행 후 어디로 이동할 것인지를 지정하는 대상입니다.",
      "예를 들어 Navigate To Action을 사용한다면 이동할 Frame을 Destination으로 설정합니다.",
      "프로토타입을 만들 때는 단순히 버튼과 화면을 연결하는 것이 아니라 다음 화면의 목적을 고려해야 합니다.",
      "사용자가 이 요소를 선택한 다음 어떤 화면을 보게 되는가?"
    ]
  },
  {
    "id": "section-20",
    "source": "8",
    "title": "Instant",
    "kind": "lesson",
    "eyebrow": "Animation과 연결",
    "items": [
      "Animation은 화면이나 요소가 변경될 때 어떤 방식으로 전환될 것인지 설정합니다.",
      "같은 화면 이동이라도 Animation 설정에 따라 사용자에게 전달되는 느낌이 달라집니다.",
      "애니메이션 없이 화면이 즉시 변경됩니다.",
      "가장 단순한 전환 방법입니다.",
      "초기 프로토타입을 제작할 때 먼저 Instant로 전체 화면을 연결한 후 필요한 부분에 Animation을 추가하는 방식이 효율적입니다."
    ]
  },
  {
    "id": "section-21",
    "source": "8",
    "title": "Dissolve",
    "kind": "lesson",
    "eyebrow": "Animation과 연결",
    "items": [
      "기존 화면이 서서히 사라지고 새로운 화면이 나타납니다.",
      "자연스럽고 부드러운 화면 전환을 만들 때 사용할 수 있습니다."
    ]
  },
  {
    "id": "section-22",
    "source": "8",
    "title": "Smart Animate",
    "kind": "dense",
    "eyebrow": "Animation과 연결",
    "items": [
      "두 화면에 있는 동일한 요소를 비교하여 변화 과정을 자동으로 애니메이션으로 만들어줍니다.",
      "Smart Animate는 Figma 프로토타입에서 매우 자주 활용되는 기능입니다.",
      "변화시킬 수 있는 대표적인 속성은 다음과 같습니다.",
      "위치",
      "크기",
      "투명도",
      "회전",
      "색상",
      "형태",
      "간격",
      "Smart Animate를 사용할 때는 두 Frame이나 Variant 내부의 Layer 이름을 동일하게 설정하는 것이 중요합니다.",
      "Figma는 동일한 이름의 Layer를 기준으로 어떤 요소가 변화했는지 판단합니다."
    ]
  },
  {
    "id": "section-23",
    "source": "8",
    "title": "Move In",
    "kind": "dense",
    "eyebrow": "Animation과 연결",
    "items": [
      "새로운 화면이나 요소가 특정 방향에서 들어옵니다.",
      "방향을 설정할 수 있습니다.",
      "Left",
      "Right",
      "Top",
      "Bottom",
      "주로 메뉴나 Bottom Sheet 등을 표현할 때 사용할 수 있습니다."
    ]
  },
  {
    "id": "section-24",
    "source": "8",
    "title": "Move Out",
    "kind": "lesson",
    "eyebrow": "Animation과 연결",
    "items": [
      "현재 화면이나 요소가 특정 방향으로 빠져나갑니다.",
      "Move In과 함께 사용하면 자연스러운 화면 등장 및 종료 효과를 만들 수 있습니다."
    ]
  },
  {
    "id": "section-25",
    "source": "8",
    "title": "Push",
    "kind": "lesson",
    "eyebrow": "Animation과 연결",
    "items": [
      "새로운 화면이 들어오면서 기존 화면을 밀어냅니다.",
      "페이지 간 이동 관계를 강조할 때 사용할 수 있습니다."
    ]
  },
  {
    "id": "section-26",
    "source": "8",
    "title": "Slide In / Slide Out",
    "kind": "lesson",
    "eyebrow": "Animation과 연결",
    "items": [
      "화면이나 요소가 슬라이드 형태로 들어오거나 나갑니다.",
      "모바일 UI의 화면 이동이나 패널을 표현할 때 활용할 수 있습니다."
    ]
  },
  {
    "id": "section-27",
    "source": "9",
    "title": "Duration",
    "kind": "dense",
    "eyebrow": "Animation과 연결",
    "items": [
      "Animation을 설정할 때는 전환 속도와 Easing도 지정할 수 있습니다.",
      "Animation이 실행되는 시간을 의미합니다.",
      "단위는 ms입니다.",
      "예시",
      "100ms : 매우 빠른 반응",
      "200ms : 빠르고 자연스러운 반응",
      "300ms : 일반적인 UI 애니메이션",
      "500ms 이상 : 비교적 느린 애니메이션",
      "너무 긴 Animation은 사용자가 서비스가 느리다고 느낄 수 있기 때문에 주의해야 합니다."
    ]
  },
  {
    "id": "section-28",
    "source": "9",
    "title": "Easing",
    "kind": "dense",
    "eyebrow": "Animation과 연결",
    "items": [
      "Easing은 Animation이 움직이는 속도의 변화를 설정합니다.",
      "즉, 처음부터 끝까지 동일한 속도로 움직이는 것이 아니라 자연스럽게 가속하거나 감속하도록 만들 수 있습니다.",
      "대표적인 설정은 다음과 같습니다.",
      "Linear",
      "Ease In",
      "Ease Out",
      "Ease In and Out",
      "자연스러운 UI에서는 일반적으로 Ease Out 또는 Ease In and Out을 많이 사용합니다."
    ]
  },
  {
    "id": "section-29",
    "source": "10",
    "title": "Flow Starting Point",
    "kind": "dense",
    "eyebrow": "Flow와 Overlay",
    "items": [
      "Flow Starting Point는 프로토타입을 실행했을 때 처음 시작할 화면을 의미합니다.",
      "프로토타입을 제작할 때는 하나 이상의 Flow를 만들 수 있습니다.",
      "예를 들어 하나의 프로젝트 안에서도 서로 다른 사용자 흐름을 구분할 수 있습니다.",
      "로그인 Flow",
      "회원가입 Flow",
      "상품 구매 Flow",
      "결제 Flow",
      "설정 변경 Flow",
      "각 Flow마다 시작 화면을 별도로 지정할 수 있습니다."
    ]
  },
  {
    "id": "section-30",
    "source": "11",
    "title": "Flow를 사용하는 이유",
    "kind": "dense",
    "eyebrow": "Flow와 Overlay",
    "items": [
      "하나의 서비스에는 여러 개의 사용자 흐름이 존재합니다.",
      "전체 화면을 하나의 긴 프로토타입으로 연결하면 테스트하거나 설명하기 어려워질 수 있습니다.",
      "따라서 기능별로 Flow를 구분하면 다음과 같은 장점이 있습니다.",
      "기능별 테스트 가능",
      "발표나 시연이 쉬움",
      "개발자에게 기능별 흐름 전달 가능",
      "특정 기능만 빠르게 확인 가능"
    ]
  },
  {
    "id": "section-31",
    "source": "12",
    "title": "Overlay",
    "kind": "dense",
    "eyebrow": "Flow와 Overlay",
    "items": [
      "Overlay는 현재 화면 위에 다른 Frame을 표시하는 기능입니다.",
      "Overlay를 활용하면 실제 서비스에서 자주 사용하는 다양한 UI를 표현할 수 있습니다.",
      "대표적으로 다음과 같습니다.",
      "Modal",
      "Popup",
      "Bottom Sheet",
      "Dropdown",
      "Alert",
      "Tooltip",
      "Menu",
      "Overlay 설정에서 확인할 항목",
      "Overlay를 사용할 때는 다음과 같은 내용을 설정할 수 있습니다.",
      "Position",
      "Overlay가 표시될 위치를 지정합니다.",
      "Background",
      "Overlay가 열렸을 때 기존 화면의 배경을 어둡게 처리할 수 있습니다.",
      "Close when clicking outside",
      "Overlay 바깥 영역을 클릭하면 Overlay가 닫히도록 설정할 수 있습니다."
    ]
  },
  {
    "id": "section-32",
    "source": "13",
    "title": "Smart Animate의 원리",
    "kind": "dense",
    "eyebrow": "Flow와 Overlay",
    "items": [
      "Smart Animate는 두 화면의 Layer를 비교하여 동일한 요소를 찾아 자동으로 Animation을 생성합니다.",
      "예를 들어 두 Frame에서 같은 Layer가 다음과 같이 변경되었다고 가정합니다.",
      "첫 번째 상태",
      "작은 이미지",
      "화면 왼쪽 위치",
      "투명도 50%",
      "두 번째 상태",
      "큰 이미지",
      "화면 중앙 위치",
      "투명도 100%",
      "Smart Animate를 적용하면 이미지가 자연스럽게 커지면서 중앙으로 이동하고 동시에 투명도가 변경됩니다.",
      "Smart Animate 사용 시 주의사항",
      "Smart Animate를 정확하게 사용하려면 다음 내용을 확인해야 합니다.",
      "1. Layer 이름을 동일하게 설정",
      "2. Frame 구조를 가능한 비슷하게 유지",
      "3. Animation이 필요한 요소의 이름 확인",
      "4. 지나치게 많은 요소에 Animation을 적용하지 않기"
    ]
  },
  {
    "id": "section-33",
    "source": "14",
    "title": "Interactive Component",
    "kind": "dense",
    "eyebrow": "Component 인터랙션",
    "items": [
      "Interactive Component는 Component의 Variant를 서로 연결하여 컴포넌트 자체에 인터랙션을 포함시키는 기능입니다.",
      "일반적인 프로토타입에서는 화면마다 버튼의 상태를 만들어야 하지만 Interactive Component를 사용하면 Component 내부에 동작을 정의할 수 있습니다.",
      "예를 들어 버튼 Component를 다음과 같이 구성할 수 있습니다.",
      "Default",
      "Hover",
      "Pressed",
      "Disabled",
      "그리고 Prototype 설정으로 각각의 Variant를 연결하면 여러 화면에서 해당 버튼을 사용할 때 동일한 인터랙션이 자동으로 적용됩니다."
    ]
  },
  {
    "id": "section-34",
    "source": "15",
    "title": "프로토타입과 Component의 관계",
    "kind": "dense",
    "eyebrow": "Component 인터랙션",
    "items": [
      "Figma에서 프로토타입을 효율적으로 제작하기 위해서는 Component와 함께 활용하는 것이 좋습니다.",
      "일반적인 역할은 다음과 같습니다.",
      "Frame Prototype",
      "화면과 화면 사이의 이동을 담당합니다.",
      "Interactive Component",
      "화면 내부 UI 요소의 상태 변화를 담당합니다.",
      "예를 들어",
      "페이지 이동 → Frame Prototype",
      "버튼 Hover → Interactive Component",
      "Toggle ON/OFF → Interactive Component",
      "Popup 열기 → Overlay",
      "화면 전환 → Navigate To",
      "처럼 역할을 나누어 사용할 수 있습니다."
    ]
  },
  {
    "id": "section-35",
    "source": "16",
    "title": "Preview / Present",
    "kind": "dense",
    "eyebrow": "테스트와 제작",
    "items": [
      "프로토타입 제작이 완료되면 Preview 또는 Present 기능을 사용하여 실제 사용자처럼 테스트할 수 있습니다.",
      "프로토타입은 연결하는 것보다 직접 실행하고 테스트하는 과정이 중요합니다.",
      "Preview에서 확인해야 할 내용",
      "화면 이동",
      "의도한 화면으로 이동하는가?",
      "버튼 동작",
      "클릭해야 하는 요소가 정상적으로 작동하는가?",
      "뒤로가기",
      "이전 화면으로 정상적으로 돌아가는가?",
      "Overlay",
      "팝업이나 메뉴가 정상적으로 열리고 닫히는가?",
      "Animation",
      "화면 전환 효과가 자연스러운가?",
      "사용자 흐름",
      "사용자가 다음 행동을 쉽게 이해할 수 있는가?"
    ]
  },
  {
    "id": "section-36",
    "source": "17",
    "title": "사용자 흐름을 먼저 설계하기",
    "kind": "lesson",
    "eyebrow": "테스트와 제작",
    "items": [
      "프로토타입을 만들 때 모든 요소에 Animation을 적용할 필요는 없습니다.",
      "중요한 것은 화려한 움직임이 아니라 사용자가 서비스를 어떻게 이용하는지를 자연스럽게 표현하는 것입니다.",
      "프로토타입을 연결하기 전에 사용자가 어떤 순서로 행동할지 먼저 생각합니다.",
      "시작 → 행동 → 결과 → 다음 행동",
      "이 흐름을 먼저 정리하면 프로토타입을 훨씬 쉽게 제작할 수 있습니다."
    ]
  },
  {
    "id": "section-37",
    "source": "17",
    "title": "핵심 기능부터 연결하기",
    "kind": "lesson",
    "eyebrow": "테스트와 제작",
    "items": [
      "처음부터 모든 버튼을 연결하기보다 서비스의 핵심 기능을 먼저 연결합니다.",
      "핵심 흐름이 완성된 후 세부적인 인터랙션을 추가하는 방식이 효율적입니다."
    ]
  },
  {
    "id": "section-38",
    "source": "17",
    "title": "실제 서비스처럼 과도하게 만들 필요는 없음",
    "kind": "lesson",
    "eyebrow": "테스트와 제작",
    "items": [
      "프로토타입은 실제 개발된 서비스가 아닙니다.",
      "따라서 모든 기능을 완벽하게 구현할 필요는 없습니다.",
      "프로토타입의 목적은",
      "사용자 경험과 서비스 흐름을 확인하는 것",
      "입니다."
    ]
  },
  {
    "id": "section-39",
    "source": "17",
    "title": "Animation을 과도하게 사용하지 않기",
    "kind": "lesson",
    "eyebrow": "테스트와 제작",
    "items": [
      "모든 화면에 화려한 Animation을 적용하면 오히려 사용성이 떨어질 수 있습니다.",
      "Animation은 다음과 같은 목적이 있을 때 사용하는 것이 좋습니다.",
      "사용자의 시선을 이동",
      "상태 변화를 표현",
      "화면 간 관계를 설명",
      "사용자 행동에 대한 피드백 제공"
    ]
  },
  {
    "id": "section-40",
    "source": "18",
    "title": "프로토타입 제작 과정",
    "kind": "steps",
    "eyebrow": "테스트와 제작",
    "items": [
      "프로토타입을 제작할 때는 다음 순서로 진행하면 좋습니다.",
      "STEP 1. 화면 디자인 완성",
      "먼저 필요한 화면과 UI를 제작합니다.",
      "STEP 2. 사용자 흐름 정리",
      "사용자가 어떤 순서로 화면을 이용할지 정합니다.",
      "STEP 3. Flow Starting Point 설정",
      "프로토타입 시작 화면을 지정합니다.",
      "STEP 4. 화면 연결",
      "버튼이나 요소를 다음 Frame과 연결합니다.",
      "STEP 5. Trigger 설정",
      "어떤 사용자 행동에서 동작할지 설정합니다.",
      "STEP 6. Action 설정",
      "화면 이동, Overlay, Back 등의 동작을 설정합니다.",
      "STEP 7. Animation 설정",
      "필요한 화면에 전환 효과를 적용합니다.",
      "STEP 8. Preview 테스트",
      "사용자 입장에서 직접 프로토타입을 실행합니다.",
      "STEP 9. 수정",
      "불편한 흐름이나 동작을 수정합니다."
    ]
  },
  {
    "id": "section-41",
    "source": "19",
    "title": "프로토타입에서 자주 사용하는 기능 정리",
    "kind": "table",
    "eyebrow": "수업 정리",
    "items": [
      "| 기능 | 역할 |",
      "| On Click | 클릭 시 동작 |",
      "| On Drag | 드래그 시 동작 |",
      "| After Delay | 일정 시간 후 자동 동작 |",
      "| Navigate To | 다른 화면으로 이동 |",
      "| Back | 이전 화면으로 이동 |",
      "| Open Overlay | 현재 화면 위에 새로운 화면 표시 |",
      "| Close Overlay | Overlay 닫기 |",
      "| Scroll To | 화면 내 특정 위치로 이동 |",
      "| Change To | Component Variant 변경 |",
      "| Instant | 즉시 화면 전환 |",
      "| Dissolve | Fade 형태의 화면 전환 |",
      "| Smart Animate | 요소 변화 자동 Animation |",
      "| Flow Starting Point | 프로토타입 시작 화면 지정 |"
    ]
  },
  {
    "id": "section-42",
    "source": "20",
    "title": "핵심 개념 정리",
    "kind": "pipeline",
    "eyebrow": "수업 정리",
    "items": [
      "프로토타입을 처음 배울 때는 다음 구조를 기억하는 것이 가장 중요합니다.",
      "Trigger",
      "언제 실행되는가?",
      "Action",
      "무엇을 실행하는가?",
      "Destination",
      "어디로 이동하는가?",
      "Animation",
      "어떻게 보여주는가?",
      "이를 한 문장으로 정리하면 다음과 같습니다.",
      "프로토타입은 사용자의 행동과 화면의 반응을 연결하여 실제 서비스의 사용 흐름을 미리 체험할 수 있도록 만드는 과정입니다."
    ]
  },
  {
    "id": "section-43",
    "source": "21",
    "title": "수업 핵심 키워드",
    "kind": "keywords",
    "eyebrow": "수업 정리",
    "items": [
      "Prototype",
      "Interaction",
      "Trigger",
      "Action",
      "Destination",
      "Animation",
      "Navigate To",
      "Back",
      "Overlay",
      "Scroll To",
      "Smart Animate",
      "Interactive Component",
      "Flow",
      "Flow Starting Point",
      "Preview",
      "Present",
      "User Flow",
      "Interaction Design"
    ]
  },
  {
    "id": "section-44",
    "source": "practice",
    "title": "실습: 핵심 사용자 흐름 연결",
    "kind": "practice",
    "eyebrow": "직접 만들기",
    "items": [
      "제공된 Figma 파일에서 시작 화면을 지정합니다.",
      "핵심 사용자 흐름 1개를 선택해 Frame을 순서대로 배치합니다.",
      "버튼에 On Click과 Navigate To 또는 Open Overlay를 연결합니다.",
      "필요한 화면 한 곳에 Smart Animate 또는 Dissolve를 적용합니다.",
      "Preview에서 시작 → 행동 → 결과 → 다음 행동을 직접 테스트합니다."
    ]
  },
  {
    "id": "section-45",
    "source": "practice",
    "title": "최종 검수",
    "kind": "checklist",
    "eyebrow": "직접 만들기",
    "items": [
      "Flow Starting Point에서 정상적으로 시작하는가?",
      "Destination이 의도한 Frame이나 Overlay를 가리키는가?",
      "Back과 Close Overlay가 원래 흐름으로 돌아오는가?",
      "Smart Animate 대상의 Layer 이름이 일치하는가?",
      "Animation 속도가 사용자 흐름을 방해하지 않는가?",
      "공유 링크의 Present 모드에서 전체 흐름을 시연할 수 있는가?"
    ]
  }
];
