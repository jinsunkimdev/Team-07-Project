import { css } from "@emotion/react";

export const messageList = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style: none;
`;

export const messageItem = css`
  display: flex;
  margin: 0 auto;
  padding: 24px;
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 12px;
  width: 384px;
  height: 280px;
  .message-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sender {
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-bold);
    margin-bottom: 4px;
    color: var(--black);
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100px;
  }

  .titlePrefix {
    font-weight: var(--font-weight-regular);
  }

  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-14);
    padding: 2px 6px;
    background-color: var(--purple-100);
    border-radius: 6px;
    color: var(--primary);
    width: 41px;
    height: 20px;
  }

  .content {
    font-size: var(--font-size-18);
    color: var(--gray-700);
    margin: 16px 24px 58px 24px;
  }

  .date {
    display: block;
    text-align: left;
    font-size: 12px;
    color: var(--gray-400);
  }
`;

export const loader = css`
  padding: 24px;
  text-align: center;
  color: var(--gray-500);
`;
