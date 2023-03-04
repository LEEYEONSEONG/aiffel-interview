import { ReactNode } from 'react';

import styled from 'styled-components';

import { fontSize } from 'styles/mixins';

interface ITextSmall {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextSmall({
  children,
  weight = 300,
  color = '#191919',
  ...restProps
}: ITextSmall) {
  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextSmall;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.small};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
