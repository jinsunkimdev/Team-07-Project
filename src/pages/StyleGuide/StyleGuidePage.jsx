/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../../components/Button";
import AddEmojiButton from "../../components/Button/AddEmojiButton";
import Avatar from "../../components/Avatar";
import avatarSampleImg from "../../assets/images/img-avatar-sample.jpg";
import GlobalHeader from "../../components/Header/GlobalHeader";
import ListPageHeader from "../List/ListPageHeader";
import MessageCard from "../../components/MessageCard/MessageCard";
import AddMessageCard from "../../components/MessageCard/AddMessageCard";

const mockMessage = {
  sender: "강미나",
  profileImg: avatarSampleImg,
  relationship: "가족",
  content:
    "코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!",
  createdAt: "2025.06.01",
};

const StyleGuidePage = () => {
  return (
    <div css={pageStyle}>
      {/* Buttons */}
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
      {/* AddEmojiButton */}
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
      {/* Avatar */}
      <section css={sectionStyle}>
        <h2>Avatar</h2>
        <Avatar size="lg" onClick={() => alert("avatar clicked")} />
        <Avatar
          size="lg"
          imgSrc={avatarSampleImg}
          onClick={() => alert("avatar clicked")}
        />
        <Avatar size="md" imgSrc={avatarSampleImg} />
        <Avatar size="sm" imgSrc={avatarSampleImg} />
        <Avatar size="xs" imgSrc={avatarSampleImg} />
      </section>
      {/* Headers */}
      <section css={sectionStyle}>
        <h2>Headers</h2>
        <div className="sub-section">
          <h3>GlobalHeader</h3>
          <GlobalHeader />
        </div>
        <div className="sub-section">
          <h3>ListPageHeader</h3>
          <ListPageHeader recipient="Ashley Kim" />
        </div>
      </section>
      {/* Cards */}
      <section css={sectionStyle}>
        <h2>MessageCard</h2>
        <AddMessageCard />
        <MessageCard messageData={mockMessage} isRecipient={true} />
      </section>
    </div>
  );
};
export default StyleGuidePage;

const pageStyle = css`
  width: var(--content-width);
  padding: var(--content-padding);
  margin: 30px auto;
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
