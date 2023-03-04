import styled from 'styled-components';

import { flex } from 'styles/flex';

function Layout({ children }: { children: JSX.Element }) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  ${flex('center', '')};
`;
