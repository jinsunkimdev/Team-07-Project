/** @jsxImportSource @emotion/react */
import { StyledButton } from "./Button.styles";

const Button = ({ variant = "primary", children, onClick, ...props }) => (
  <StyledButton variant={variant} onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

export default Button;
