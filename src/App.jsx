import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import {
  PrimaryButton,
  SecondaryButton,
  OutlinedButton,
  DisabledButton,
} from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <PrimaryButton>Enabled</PrimaryButton>
      <SecondaryButton>Enabled</SecondaryButton>
      <OutlinedButton>Enabled</OutlinedButton>
      <DisabledButton>Disabled</DisabledButton>
    </>
  );
}

export default App;
