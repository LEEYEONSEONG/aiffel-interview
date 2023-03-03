import React, { useCallback, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from 'components';

import { getUserInfo } from 'redux/modules/auth';

import { flex } from 'styles/flex';

import { validateEmail } from 'utils/regExp';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: 'we.want.u@aiffel.com',
    password: 'passpassplz',
  });

  const { email, password } = inputValue;

  const fetchGetUserInfo = async (email: string, password: string) => {
    const { data } = await axios.get(
      `/login?email=${email}&password=${password}`,
    );

    if (!data.length) return alert('아이디와 비밀번호를 확인해주세요.');

    localStorage.setItem('token', 'aiffel');

    dispatch(getUserInfo(data[0]));

    navigate('/forum');
  };

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

    fetchGetUserInfo(email, password);
  };

  return (
    <Container>
      <Title>Willing to Explore?</Title>
      <Description>매일매일 모험하며 제대로 배우자</Description>
      <InputWrap>
        <Input
          value={email}
          name="email"
          type="email"
          placeholder="사용자명 또는 이메일 주소"
          onChange={handleInputValue}
        />
      </InputWrap>
      <InputWrap>
        <Input
          value={password}
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleInputValue}
        />
      </InputWrap>
      <FindPasswordText>비밀번호를 잊어버리셧나요?</FindPasswordText>
      <ButtonWrap>
        <Button onClick={handleLoginBtnClick}>로그인</Button>
      </ButtonWrap>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  ${flex('center', '', 'column')}
  width: 450px;
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 14px;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #616161;
  margin-bottom: 16px;
`;

const InputWrap = styled.div`
  border: 1px solid #f7cf47;
  padding: 16px 12px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;

  input {
    color: #777777;
    font-size: 18px;
  }
`;

const FindPasswordText = styled(Description)`
  font-size: 17px;
`;

const ButtonWrap = styled.div`
  background-color: #f7cf47;
  border-radius: 8px;
  color: #000000;
  font-weight: 700;
  font-size: 19px;
`;
