import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import { Button, Input, Text } from 'components';

import useLoginQuery from './queries/useLoginQuery';

import validateEmail from 'utils/regExp';

import { flex } from 'styles/flex';
import { fontSize } from 'styles/mixins';

function Login() {
  const { mutate: login } = useLoginQuery();

  const [inputValue, setInputValue] = useState({
    email: 'we.want.u@aiffel.com',
    password: 'passpassplz',
  });

  const { email, password } = inputValue;

  const handleInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setInputValue((prev) => ({ ...prev, [name]: value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputValue],
  );

  const handleLoginBtnClick = () => {
    if (!(password.length >= 10 && validateEmail(email)))
      return alert('아이디와 비밀번호를 확인해주세요.');

    login({ email, password });
  };

  return (
    <Container>
      <Text.Large weight={700}>Willing to Explore?</Text.Large>
      <Text.Regular color="#616161">
        매일매일 모험하며 제대로 배우자
      </Text.Regular>
      <Input>
        <InputValue
          value={email}
          name="email"
          type="email"
          textAlign="left"
          placeholder="사용자명 또는 이메일 주소"
          onChange={handleInputValue}
        />
      </Input>
      <Input>
        <InputValue
          value={password}
          name="password"
          type="password"
          textAlign="left"
          placeholder="비밀번호"
          onChange={handleInputValue}
        />
      </Input>
      <Text.Small>비밀번호를 잊어버리셧나요?</Text.Small>
      <LoginButton onClick={handleLoginBtnClick}>로그인</LoginButton>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  ${flex('center', '', 'column')}
  width: 450px;
  height: 100vh;
  row-gap: 14px;
`;

const InputValue = styled(Input.Value)`
  border: 2px solid #f7cf47;
  font-size: ${fontSize.regular};
  font-weight: 700;
  color: #777777;
  border-radius: 8px;

  ::placeholder {
    font-weight: 700;
  }
`;

const LoginButton = styled(Button)`
  ${flex('center', 'center')}
  background-color: #f7cf47;
  color: #ffffff;
  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
`;
