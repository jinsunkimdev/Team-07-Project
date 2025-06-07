import ReactionBadges from "../Dropdown/ReactionBadges";
import EmojiPopover from "../Dropdown/EmojiPopover";
import { useState } from "react";

const ReactionBox = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <div>
      <ReactionBadges refreshTrigger={refreshTrigger} />
      <EmojiPopover setRefreshTrigger={setRefreshTrigger} />
    </div>
  );
};

export default ReactionBox;
