import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { flex } from 'styles/flex';

interface IValuePropTypes extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  name?: string;
}

function Value({ value, name, ...restProps }: IValuePropTypes) {
  return <TextAreaValue value={value} name={name} {...restProps} />;
}

export default Value;

const TextAreaValue = styled.textarea`
  ${flex('flex-start', '')};
  height: 100%;
  overflow-y: auto;
  text-overflow: ellipsis;
  padding: 16px 12px;
  resize: none;
  color: #777777;
`;
