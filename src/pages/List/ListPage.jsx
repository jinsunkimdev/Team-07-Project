import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import GlobalHeader from "../../components/Header/GlobalHeader";
import { css } from "@emotion/react";
import { BREAKPOINTS } from "../../constants/constants";

function ListPage() {
  return (
    <div>
      <GlobalHeader>
        <Button
          as={Link}
          to="/post"
          variant="outlined"
          size="md"
          css={css`
            width: auto;
            @media (max-width: ${BREAKPOINTS.md}px) {
              font-size: var(--font-size-14);
            }
          `}
        >
          롤링 페이퍼 만들기
        </Button>
      </GlobalHeader>
    </div>
  );
}
export default ListPage;
