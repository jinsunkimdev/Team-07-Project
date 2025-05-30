import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { Button, AddEmojiButton } from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Button size="lg" variant="primary">
        Enabled
      </Button>
      <Button size="md" variant="secondary">
        Enabled
      </Button>
      <Button size="md" variant="secondary" disabled>
        Disabled
      </Button>
      <Button size="sm" variant="outlined">
        Enabled
      </Button>
      <Button size="sm" variant="outlined" disabled>
        Disabled
      </Button>
      <AddEmojiButton size="lg">Enabled</AddEmojiButton>
      <AddEmojiButton size="lg" disabled>
        Disabled
      </AddEmojiButton>
    </>
  );
}

export default App;
