### 🧩 파트2 7팀 프로젝트: 롤링 (Rolling)

---

#### 📁 폴더 구조
src/  
├── App.jsx  
├── api/ # API 요청 로직  
├── assets/ # 이미지, 폰트, 글로벌 static 자원  
│ ├── icons/  
│ └── images/  
├── components/ # 재사용 가능한 UI 컴포넌트  
│ └── Button/  
├── constants/ # 상수들 (routes, messages, limits 등)  
├── hooks/ # 커스텀 훅  
├── main.jsx  
├── pages/ # 라우팅 단위 컴포넌트  
│ ├── List/  
│ │ └── ListPage.jsx  
│ └── Main/  
│ ├── components/  
│ ├── MainPage.jsx  
│ └── hooks/  
├── routes/ # react-router 설정  
│ └── Router.jsx  
├── styles/ # Reset, GlobalStyle, Theme 등  
│ ├── GlobalStyle.jsx  
│ ├── Reset.jsx  
│ └── Variables.jsx  
└── utils/ # 공통 유틸 함수 (formatDate, debounce 등)  


---

#### 📖 페이지 구조
[메인 페이지 /]  
├── 롤링페이퍼 만들기 클릭  
│ └── 롤링페이퍼 생성 페이지 /post  
│ ├── To. 입력, 컬러 선택, 이미지 선택  
│ └── 생성하기 클릭 → 생성된 롤링페이퍼 /post/{id}  
│ ├── 메시지 작성 (+ 버튼) → 메시지 작성 페이지 /post/{id}/message  
│ ├── 수정하기 → 수정 페이지 /post/{id}/edit  
│ ├── 공유 → 카카오톡, URL 복사  
│ └── 카드 클릭 → 카드 확대  
└── 구경해보기 클릭  
└── 롤링페이퍼 목록 페이지 /list  
└── 카드 선택 → 생성된 롤링페이퍼 /post/{id}  
