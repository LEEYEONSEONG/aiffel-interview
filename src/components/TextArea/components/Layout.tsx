import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 15px;
`;
