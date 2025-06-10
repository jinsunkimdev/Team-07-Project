import { useEffect, useState } from "react";

const useSenderMap = (messages = []) => {
  const [senderMap, setSenderMap] = useState({});

  useEffect(() => {
    const map = {};

    messages.forEach(({ sender, profileImageURL }) => {
      if (!sender) return;

      if (!map[sender]) {
        map[sender] = {
          count: 1,
          profileImageURL,
        };
      } else {
        map[sender].count += 1;
      }
    });

    setSenderMap(map);
  }, [messages]);

  return senderMap;
};

export default useSenderMap;
