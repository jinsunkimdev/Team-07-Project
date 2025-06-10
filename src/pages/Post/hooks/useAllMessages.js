import { useState, useEffect } from "react";
import { getMessages } from "../../../api/get/getMessages";

const useAllMessages = (recipientId) => {
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await getMessages({ id: recipientId, limit: 200 });
      setAllMessages(res.results);
    };
    if (recipientId) fetchAll();
  }, [recipientId]);

  return { allMessages, setAllMessages };
};

export default useAllMessages;
