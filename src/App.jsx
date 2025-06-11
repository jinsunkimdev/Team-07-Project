import { css } from "@emotion/react";
import Router from "./routes/Router";
import LoadingPage from "./pages/LoadingPage";
import usePageLoadTransition from "./hooks/usePageLoadTransition";

function App() {
  const { isPageLoading, showLoadingUI, fadeIn } = usePageLoadTransition();

  if (isPageLoading) {
    return <LoadingPage showLoading={showLoadingUI} />;
  } else
    return (
      <div css={AppContentStyle} className={fadeIn ? "fade-in" : ""}>
        <Router />
      </div>
    );
}

export default App;

const AppContentStyle = css`
  transition: 0.3s;
  opacity: 0;

  &.fade-in {
    opacity: 1;
  }
`;
