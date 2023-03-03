import { ReactNode } from 'react';
import styled from 'styled-components';

import { fontSize } from 'styles/mixins';

interface ITextLarge {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextLarge(props: ITextLarge) {
  const { children, weight = 500, color = '#191919', ...restProps } = props;

  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextLarge;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.large};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
