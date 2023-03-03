import React from 'react';

import styled from 'styled-components';

import { Button, Input } from 'components';
import { flex } from 'styles/flex';

function Forum() {
  return (
    <Container>
      <Header>
        <Title>묻고 답하기</Title>
        <ButtonWrap>
          <Button>새로운 질문</Button>
        </ButtonWrap>
      </Header>
      <InputWrap>
        <Input value="asd" type="text" name="email" placeholder="검색..." />
      </InputWrap>
    </Container>
  );
}

export default Forum;

const Container = styled.div`
  width: 1000px;
  margin-top: 84px;
`;

const Header = styled.div`
  ${flex('space-between', '')}
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 14px;
`;

const ButtonWrap = styled.div`
  ${flex('center', 'center')}
  background-color: #505FED;
  color: #ffffff;
  width: 110px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
`;

const InputWrap = styled.div`
  margin-top: 26px;
  border-radius: 8px;
  border: 1px solid #dde1e6;
  padding: 16px 12px;
`;
