import React, { HTMLAttributes } from 'react';

import styled from 'styled-components';

interface IButtonPropTypes extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  value,
  type,
  name,
  onChange,
  ...restProps
}: IButtonPropTypes) {
  return (
    <InputStyled
      autoComplete="off"
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      {...restProps}
    />
  );
}

export default Input;

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  ::placeholder {
    opacity: 0.5;
    color: #777777;
  }
`;
