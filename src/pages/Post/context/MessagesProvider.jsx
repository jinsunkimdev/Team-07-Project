import useMessagesPage from "../hooks/useMessagesPage";
import { MessagesContext } from "./MessagesContext";

export const MessagesProvider = ({ children }) => {
  const state = useMessagesPage(); // 딱 한 번 호출

  return (
    <MessagesContext.Provider value={state}>
      {children}
    </MessagesContext.Provider>
  );
};
