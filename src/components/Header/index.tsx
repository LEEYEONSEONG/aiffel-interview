import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Text from 'components/Text';

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
        <Text.Regular>{username}</Text.Regular>
        <Profile>
          <img alt="profile" src={profile} />
        </Profile>
      </InfoWrap>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  max-width: 900px;
  height: 50px;
  margin: 0 auto;
  ${flex('space-between', 'center')}
`;

const Logo = styled.div`
  ${fitImg}
  width: 80px;
`;

const Profile = styled.div`
  ${fitImg}
  width: 30px;
  margin-left: 12px;
  img {
    border-radius: 25px;
  }
`;

const InfoWrap = styled.div`
  ${flex('', 'center')}
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
