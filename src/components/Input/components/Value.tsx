import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { fontSize } from 'styles/mixins';

interface IValueProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  textAlign?: 'center' | 'left' | 'right';
  value: string;
}

function Value({
  type = 'text',
  textAlign = 'center',
  ...restProps
}: IValueProps) {
  return <InputValue textAlign={textAlign} type={type} {...restProps} />;
}

export default Value;

const InputValue = styled.input<Partial<IValueProps>>`
  width: 100%;
  padding: 16px 12px;
  color: #777777;
  text-align: ${(props) => props.textAlign};
  font-size: ${fontSize.regular};
`;
