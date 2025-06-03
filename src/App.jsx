import Router from "./routes/Router";
import ToastProvider from "./components/Toast/ToastProvider";

function App() {
  return (
    <>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </>
  );
}

export default App;
