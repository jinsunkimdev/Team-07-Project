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
          <Button size="lg" variant="primary" onClick={() => alert("clicked")}>
            Enabled
          </Button>
          <Button
            size="lg"
            variant="primary"
            disabled
            onClick={() => alert("clicked")}
          >
            Disabled
          </Button>
          <Button size="md" variant="primary" onClick={() => alert("clicked")}>
            Enabled
          </Button>
          <Button
            size="md"
            variant="primary"
            onClick={() => alert("clicked")}
            disabled
          >
            Enabled
          </Button>
          <Button size="sm" variant="primary" onClick={() => alert("clicked")}>
            Enabled
          </Button>
          <Button size="xs" variant="primary" onClick={() => alert("clicked")}>
            Enabled
          </Button>
        </div>
        <div className="sub-section">
          <h3>Secondary</h3>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => alert("clicked")}
          >
            Enabled
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => alert("clicked")}
            disabled
          >
            Disabled
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={() => alert("clicked")}
          >
            Enabled
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={() => alert("clicked")}
            disabled
          >
            Enabled
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => alert("clicked")}
          >
            Enabled
          </Button>
          <Button size="xs" variant="secondary">
            Enabled
          </Button>
        </div>
        <div className="sub-section">
          <h3>Outlined</h3>
          <Button size="lg" variant="outlined" onClick={() => alert("clicked")}>
            Enabled
          </Button>
          <Button
            size="lg"
            variant="outlined"
            onClick={() => alert("clicked")}
            disabled
          >
            Disabled
          </Button>
          <Button size="md" variant="outlined" onClick={() => alert("clicked")}>
            Enabled
          </Button>
          <Button
            size="md"
            variant="outlined"
            onClick={() => alert("clicked")}
            disabled
          >
            Enabled
          </Button>
          <Button size="sm" variant="outlined" onClick={() => alert("clicked")}>
            Enabled
          </Button>
          <Button size="xs" variant="outlined" onClick={() => alert("clicked")}>
            Enabled
          </Button>
        </div>
      </section>
      <section css={sectionStyle}>
        <h2>AddEmojiButton</h2>
        <div className="sub-section">
          <AddEmojiButton size="lg" onClick={() => alert("clicked")}>
            Enabled
          </AddEmojiButton>
          <AddEmojiButton size="lg" onClick={() => alert("clicked")} disabled>
            Disabled
          </AddEmojiButton>
          <AddEmojiButton size="md" onClick={() => alert("clicked")}>
            Enabled
          </AddEmojiButton>
          <AddEmojiButton size="md" onClick={() => alert("clicked")} disabled>
            Disabled
          </AddEmojiButton>
          <AddEmojiButton size="sm" onClick={() => alert("clicked")}>
            Enabled
          </AddEmojiButton>
          <AddEmojiButton size="xs" onClick={() => alert("clicked")}>
            Enabled
          </AddEmojiButton>
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
