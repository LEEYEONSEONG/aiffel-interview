import React, { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button, SearchBar, Text } from 'components';
import ForumList from './components/ForumList';

import { flex } from 'styles/flex';
import useGetForumListQuery from './queries/useGetForumListQeury';

function Forum() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  useGetForumListQuery();

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleAddBtnClick = () => {
    navigate('/write');
  };

  return (
    <Container>
      <Header>
        <Text.Large weight={700}>묻고 답하기</Text.Large>
        <AddButton onClick={() => handleAddBtnClick()}>새로운 질문</AddButton>
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
