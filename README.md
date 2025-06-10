
## 🧩 파트2 7팀 프로젝트: 롤링 (Rolling)

> **누구나 온라인 롤링페이퍼를 만들고 공유할 수 있는 서비스입니다.**  
> 🗓️ **프로젝트 기간**: 25.05.29 - 25.06.14


 ----------

### 🖥️ 배포 링크

🔗 [https://team-07-project.vercel.app/](https://team-07-project.vercel.app/)

---

### 🧐 서비스 미리보기
(이미지 수정 예정입니다)

![image](https://github.com/user-attachments/assets/5d990e48-2dab-4aba-9bcc-695fb9634ddc)

![image](https://github.com/user-attachments/assets/2f50763d-cd6f-4b28-a078-a723d85ef50c)

----------

### 🛠️ 사용 기술 (Tech Stack)

-   ⚛️ React 18
-   🌐 React Router v6
-   🎨 Emotion (CSS-in-JS)
-   ⚡ Vite
-   ☁️ Vercel (배포)


----------

### 📌 주요 기능 (Features)

-   📝 롤링페이퍼 생성 / 수정 / 삭제
-   🎯 To 대상 지정 및 배경 선택 (컬러 / 이미지)
-   💌 메시지 작성 및 카드 렌더링
-   🔍 카드 클릭 시 확대 모달
-   📱 반응형 레이아웃 지원 (모바일 / 태블릿 / PC)
-   🖼️ 카드 슬라이더 및 페이지네이션
-   ⚡ UX 개선: Skeleton UI
-   💬 카카오톡 공유 기능
-   🔗 링크 복사 기능
-   😄 이모지 추가 기능


---

### 📁 폴더 구조

📦src  
┣ 📂assets # font, image 파일 등  
┣ 📂components # 공통 컴포넌트  
┣ 📂constants # 상수  
┣ 📂pages # 페이지 및 페이지 관련 컴포넌트  
┣ 📂routes # 라우팅  
┣ 📂styles # 전역 스타일  
┣ 📂utils # debounce, formatDate 등의 유틸 함수  
┣ 📜App.jsx  
┗ 📜main.jsx

---

### 📖 페이지 구조

📄 메인 페이지 `/`  
┣━━👀 구경해보기 클릭  
┣━━ 🎁 롤링페이퍼 만들기 클릭  
┃ ┗━━ 📝 롤링페이퍼 생성 페이지 `/post`  
┃ ┣━━ ✏️ To. 입력, 컬러 선택, 이미지 선택  
┃ ┗━━ ✅ 생성하기 클릭 → 생성된 롤링페이퍼 `/post/{id}`  
┃ ┣━━ ➕ 메시지 작성 (+ 버튼) → 메시지 작성 페이지 `/post/{id}/message`  
┃ ┣━━ 🛠️ 수정하기 → 수정 페이지 `/post/{id}/edit`  
┃ ┣━━ 📤 공유 → 카카오톡, URL 복사  
┃ ┗━━ 🔍 카드 클릭 → 카드 확대 (모달)  
┗━━ 📚 롤링페이퍼 목록 페이지 `/list`  
┗━━ 🃏 카드 선택 → 생성된 롤링페이퍼 `/post/{id}`

---
### 🙌 팀원 소개 (Team)

|이름  | 역할 |
|--|--|
| 김진선 | 라우터 환경 세팅, 롤링페이퍼 페이지(/post/{id}), 무한스크롤 구현 |
| 남만재 | 디자인 시스템 설계 및 최적화, 수정·삭제 페이지(/edit)|
| 이상달 | 디자인 시스템 설계 및 최적화(리드)|
| 이유진 | 메인 페이지(/), 목록 페이지(/list), 슬라이더 구현 |
| 장규완 | 생성 페이지(/post), 메시지 작성 페이지(/post/{id}/message) |
