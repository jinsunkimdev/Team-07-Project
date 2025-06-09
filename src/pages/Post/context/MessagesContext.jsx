import { createContext, useContext } from "react";

export const MessagesContext = createContext(null);

export const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages는 MessagesProvider 안에서만 사용해야 합니다.");
  }
  return context;
};