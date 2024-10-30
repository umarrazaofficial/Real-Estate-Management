import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({
  children,
  outline,
  secondary,
  variant,
  width,
  sm,
  md,
  xs,
  loader,
  disabled,
  animation = true,
  fontSm,
  ...rest
}) => {
  return (
    <StyledButton
      $secondary={secondary}
      $outline={outline}
      $variant={variant}
      $width={width}
      $sm={sm}
      $md={md}
      $xs={xs}
      $fontSm={fontSm}
      $animation={animation}
      disabled={loader || disabled}
      {...rest}>
      {loader ? <span class="loader"></span> : children}
    </StyledButton>
  );
};

export default Button;
