import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { GlobalHeaderStyle } from "../../components/Header/GlobalHeader";
import { IconShareButton } from "../../components/Button/IconButtons";
import { BREAKPOINTS } from "../../constants/constants";
import MessageAuthorCount from "../../components/MessageAuthorCount";
import DropdownSelect from "../../components/Dropdown/Dropdown";
import { SHARE_DROPDOWN_ITEMS } from "../../constants/constants";
import useToast from "../../components/Toast/useToast";
import ReactionBox from "../../components/Header/ReactionBox";
import { useMessages } from "../Post/context/MessagesContext";
import useGetScrollTopPos from "../../hooks/useGetScrollTopPos";

const HEADER_Y_OFFSET = 100;

// 카카오톡 공유
const { Kakao } = window;

const PostIdPageHeader = () => {
  // recipient 데이터 전부
  const { recipient, allMessages } = useMessages();
  const { showToast } = useToast();

  // 카카오톡 공유용 배포 사이트
  const realUrl = `https://team-07-project.vercel.app/${location.pathname}`;

  // 일정 스크롤 내려가면 header에 shadow 추가
  const scTop = useGetScrollTopPos();
  const [addHeaderShadow, setAddHeaderShadow] = useState(false);

  const changeShareOption = (option) => {
    if (!option) return;
    const currentUrl = location.href;

    if (option.label === "URL 복사") {
      // 클립보드에 URL 복사 - 실패
      if (!navigator.clipboard) {
        showToast({
          state: "error",
          message: option.errorMsg,
        });
        return;
      }

      // 클립보드에 URL 복사 - 성공
      navigator.clipboard.writeText(currentUrl);
      showToast({ message: option.value });
    }

    if (option.label === "카카오톡 공유") {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title:
            "📜 롤링페이퍼에 메시지를 남겨 소소한 추억을 만들어 보세요! 📜",
          description: "Rolling",
          imageUrl: "https://team-07-project.vercel.app/og-image-md.png", // 절대경로
          link: {
            mobileWebUrl: realUrl || currentUrl,
            webUrl: realUrl || currentUrl,
          },
        },
        buttons: [
          {
            title: "롤링페이퍼 보러가기",
            link: {
              mobileWebUrl: realUrl || currentUrl,
              webUrl: realUrl || currentUrl,
            },
          },
        ],
      });
    }
  };

  // 카카오톡 공유 환경 설정
  useEffect(() => {
    Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
    return () => Kakao.cleanup();
  }, []);

  useEffect(() => {
    scTop > HEADER_Y_OFFSET
      ? setAddHeaderShadow(true)
      : setAddHeaderShadow(false);
  }, [scTop]);

  return (
    <div css={PostIdHeaderStyle({ addHeaderShadow })}>
      <div className="header-container">
        <h2 className="recipient-name">To. {recipient?.name || ""}</h2>
        <ul className="recipient-panel">
          <li className="li-message-author-count">
            <MessageAuthorCount messages={allMessages} />
          </li>
          <li>
            <ReactionBox />
          </li>
          <li className="li-action-share">
            <DropdownSelect
              options={SHARE_DROPDOWN_ITEMS}
              customButton={<IconShareButton />}
              onChange={changeShareOption}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostIdPageHeader;

const PostIdHeaderStyle = ({ addHeaderShadow }) => css`
  ${GlobalHeaderStyle};

  box-shadow: ${addHeaderShadow ? "0 2px 12px rgba(0,0,0,.08)" : ""};

  .li-message-author-count {
    display: none;
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    .li-message-author-count {
      display: block;
    }
  }

  @media (max-width: ${BREAKPOINTS.md - 1}px) {
    padding: 0;

    .header-container {
      flex-direction: column;
    }

    .recipient-name {
      width: 100%;
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--gray-200);
      padding: 12px 20px;
    }

    .recipient-panel {
      padding: 8px 20px;
    }
  }

  .recipient-name {
    margin-right: auto;
  }

  .recipient-panel {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 14px;

    > li {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
        width: 1px;
        height: 28px;
        background-color: var(--gray-200);
      }

      &.li-action-share::after {
        display: none;
      }
    }

    > li:not(.li-action-share) {
      padding-right: 14px;
    }
  }
`;
