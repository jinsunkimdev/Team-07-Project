import { FONTS_ITEMS } from "../constants/constants";

export default function getFontValueByLabel(label) {
  const fontItem = FONTS_ITEMS.find((item) => item.label === label);
  return fontItem ? fontItem.value : null; // 없을 경우 null 또는 기본값
}
