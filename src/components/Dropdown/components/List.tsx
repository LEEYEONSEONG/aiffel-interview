import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  isOpen: boolean;
}

function List(props: IListProps) {
  const { isOpen, children, ...restProps } = props;
  return isOpen ? <Container {...restProps}>{children}</Container> : null;
}

export default List;

const Container = styled.ul`
  ${flex('', '', 'column')}
  position: absolute;
  top: 95px;
  width: 100%;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  text-align: center;
  overflow-y: auto;
  z-index: 10;
  background-color: white;
`;
