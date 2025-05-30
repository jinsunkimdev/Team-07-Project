/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../../components/Button";
import AddEmojiButton from "../../components/Button/AddEmojiButton";

const StyleGuidePage = () => {
  return (
    <div css={pageStyle}>
      <section css={sectionStyle}>
        <h2>Button</h2>
        <div className="sub-section">
          <h3>Primary</h3>
          <Button size="lg" variant="primary">
            Enabled
          </Button>
          <Button size="lg" variant="primary" disabled>
            Disabled
          </Button>
          <Button size="md" variant="primary">
            Enabled
          </Button>
          <Button size="md" variant="primary" disabled>
            Enabled
          </Button>
          <Button size="sm" variant="primary">
            Enabled
          </Button>
          <Button size="xs" variant="primary">
            Enabled
          </Button>
        </div>
        <div className="sub-section">
          <h3>Secondary</h3>
          <Button size="lg" variant="secondary">
            Enabled
          </Button>
          <Button size="lg" variant="secondary" disabled>
            Disabled
          </Button>
          <Button size="md" variant="secondary">
            Enabled
          </Button>
          <Button size="md" variant="secondary" disabled>
            Enabled
          </Button>
          <Button size="sm" variant="secondary">
            Enabled
          </Button>
          <Button size="xs" variant="secondary">
            Enabled
          </Button>
        </div>
        <div className="sub-section">
          <h3>Outlined</h3>
          <Button size="lg" variant="outlined">
            Enabled
          </Button>
          <Button size="lg" variant="outlined" disabled>
            Disabled
          </Button>
          <Button size="md" variant="outlined">
            Enabled
          </Button>
          <Button size="md" variant="outlined" disabled>
            Enabled
          </Button>
          <Button size="sm" variant="outlined">
            Enabled
          </Button>
          <Button size="xs" variant="outlined">
            Enabled
          </Button>
        </div>
      </section>
      <section css={sectionStyle}>
        <h2>AddEmojiButton</h2>
        <div className="sub-section">
          <AddEmojiButton size="lg">Enabled</AddEmojiButton>
          <AddEmojiButton size="lg" disabled>
            Disabled
          </AddEmojiButton>
          <AddEmojiButton size="md">Enabled</AddEmojiButton>
          <AddEmojiButton size="md" disabled>
            Disabled
          </AddEmojiButton>
          <AddEmojiButton size="sm">Enabled</AddEmojiButton>
          <AddEmojiButton size="xs">Enabled</AddEmojiButton>
        </div>
      </section>
    </div>
  );
};
export default StyleGuidePage;

const pageStyle = css`
  padding: 24px;
`;

const sectionStyle = css`
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);

  h2,
  h3 {
    margin-bottom: 1rem;
  }

  .sub-section {
    margin-bottom: 40px;
  }
`;
