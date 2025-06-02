import { css } from "@emotion/react";
import { btnStyles } from "./btnStylesMap";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  disabled,
  onClick,
}) => (
  <button
    css={ButtonStyle({ size, variant, disabled })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

const getVariantStyle = (variant, disabled) =>
  disabled
    ? css`
        ${btnStyles.variants.disabled}
      `
    : css`
        ${btnStyles.variants[variant]}
      `;

export const ButtonStyle = (props) => css`
  ${getVariantStyle(props.variant, props.disabled)};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${btnStyles.minWidth[props.size]};
  height: ${btnStyles.height[props.size]};
  padding: ${btnStyles.padding[props.size]};
  font-size: ${btnStyles.fontSize[props.size]};
  font-weight: ${btnStyles.fontWeight[props.size]};
  border-radius: ${btnStyles.radius[props.size]};
`;
