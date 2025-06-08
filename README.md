### 🧩 파트2 7팀 프로젝트: 롤링 (Rolling)

### 👁️👄👁️ 배포 링크

https://team-07-project.vercel.app/

---

#### 📁 폴더 구조

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

#### 📖 페이지 구조

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
