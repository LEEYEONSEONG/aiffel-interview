import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { aiffelLogo, profile } from 'assets';

import { fitImg } from 'styles/mixins';
import { flex } from 'styles/flex';

import { IRootState } from 'types/payloadTypes';

function Header() {
  const navigate = useNavigate();

  const {
    user: { username },
  } = useSelector((state: IRootState) => state.auth);

  return (
    <Container>
      <Logo>
        <img alt="logo" src={aiffelLogo} />
      </Logo>
      <InfoWrap onClick={() => navigate('/profile')}>
        <Name>{username}</Name>
        <Profile>
          <img alt="profile" src={profile} />
        </Profile>
      </InfoWrap>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  ${flex('space-between', 'center')}
`;

const Logo = styled.div`
  ${fitImg}
  width: 140px;
  height: 30px;
`;

const Profile = styled.div`
  ${fitImg}
  width: 50px;
  height: 50px;
  img {
    border-radius: 25px;
  }
`;

const InfoWrap = styled.div`
  ${flex('', 'center')}
  cursor: pointer;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-right: 12px;
`;
