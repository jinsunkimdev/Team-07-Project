import { StyledButton } from "./Button.styles";

const Button = ({ variant = "primary", children, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;
