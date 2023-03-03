import React, { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Button, SearchBar, Text } from 'components';
import ForumList from './components/ForumList';

import { getForumList } from 'redux/modules/forum';

import { flex } from 'styles/flex';

function Forum() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const fetchGetUserInfo = async () => {
    const { data } = await axios.get(`/forum`);

    dispatch(getForumList(data));
  };

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    fetchGetUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <Text.Large weight={700}>묻고 답하기</Text.Large>
        <AddButton>새로운 질문</AddButton>
      </Header>
      <SearchBar
        name="search"
        placeholder="검색어를 입력하세요."
        onChange={handleSearchInputChange}
      />
      <ForumList />
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
  margin-bottom: 24px;
`;

const AddButton = styled(Button)`
  ${flex('center', 'center')}
  background-color: #505FED;
  color: #ffffff;
  width: 110px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
`;
