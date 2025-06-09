/**
 * 메시지 배열에서 sender 기준으로 고유 작성자 목록을 추출
 * @param {Array} messages - getMessages().results 배열
 * @returns {Array} - [{ sender, profileImageURL}]
 */
export const extractUniqueSenders = (messages) => {
  const seen = new Set();
  const unique = [];

  for (const msg of messages) {
    if (!seen.has(msg.sender)) {
      seen.add(msg.sender);
      unique.push({
        sender: msg.sender,
        profileImageURL: msg.profileImageURL,
      });
    }
  }

  return unique;
};
