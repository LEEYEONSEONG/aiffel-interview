import { ReactNode } from 'react';

import styled from 'styled-components';

import { fontSize } from 'styles/mixins';
interface ITextRegular {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextRegular({
  children,
  weight = 400,
  color = '#191919',
  ...restProps
}: ITextRegular) {
  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextRegular;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.regular};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
