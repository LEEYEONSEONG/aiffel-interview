import Text from 'components/Text';
import { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

interface IItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isActive?: boolean;
  title: string;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

function Item(props: IItemProps) {
  const { children, ...restProps } = props;
  return (
    <Container {...restProps}>
      <Text.Regular weight={300}>{children}</Text.Regular>
    </Container>
  );
}

export default Item;

interface IActive {
  isActive?: boolean;
}

const Container = styled.li<IActive>`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  ${(props) => props.isActive && ActiveStyle}
`;

const ActiveStyle = css`
  background: #c0c0c0;
`;
