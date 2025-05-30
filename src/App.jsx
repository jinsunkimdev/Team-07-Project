import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { Variables } from "./styles/Variables";
import { Reset } from "./styles/Reset";

function App() {
  return (
    <>
      {/* 여기에 글로벌 스타일이나 헤더 컴포넌트 등도 올 수 있음. */}
      <GlobalStyle />
      <Variables />
      <Reset />
      <Router />
    </>
  );
}

export default App;
