import { ReactNode } from 'react';

import styled from 'styled-components';

import { flex } from 'styles/flex';

interface ISelectLayoutProps {
  children: ReactNode;
}

function SelectLayout({ children }: ISelectLayoutProps) {
  return <Container>{children}</Container>;
}

export default SelectLayout;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 15px;
`;
