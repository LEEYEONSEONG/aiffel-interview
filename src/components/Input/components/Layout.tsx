import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  ${flex('', '', 'column')}
  position: relative;
  width: 100%;
  row-gap: 15px;
`;
