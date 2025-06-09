const createRecipient = async (data) => {
  const url = `https://rolling-api.vercel.app/16-7/recipients/`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("롤링페이퍼 생성에 실패했어요. 😥");
  }

  const resData = await res.json();

  return resData;
};

export default createRecipient;
