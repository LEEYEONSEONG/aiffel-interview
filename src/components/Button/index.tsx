import React, { HTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

import { flex } from 'styles/flex';

interface IButtonPropTypes extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...restProps }: IButtonPropTypes) {
  return (
    <ButtonStyled type="button" {...restProps}>
      {children}
    </ButtonStyled>
  );
}

export default Button;

const ButtonStyled = styled.button`
  ${flex('center', 'center')}
  padding: 16px 0;
  width: 100%;
  cursor: pointer;
`;
