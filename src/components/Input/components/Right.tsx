import { ReactNode } from 'react';
import styled from 'styled-components';

interface IRightProps {
  children: ReactNode;
}

function Right({ children }: IRightProps) {
  return <Container>{children}</Container>;
}

export default Right;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
