import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Pagination, SearchBar, Text } from 'components';
import ForumList from './components/ForumList';

import { getSearchList } from 'redux/modules/forum';
import useGetForumListQuery from './queries/useGetForumListQuery';
import useGetPageListQuery from './queries/useGetPageListQuery';

import { flex } from 'styles/flex';

import { IRootState } from 'types/payloadTypes';

function Forum() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { total } = useSelector((state: IRootState) => state.forum);

  useGetForumListQuery();
  const { mutate } = useGetPageListQuery();

  const handlePageClick = (page: number) => {
    mutate({ value: searchValue, currentPage: page });
    setCurrentPage(page);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleAddBtnClick = () => {
    navigate('/write');
  };

  useEffect(() => {
    dispatch(getSearchList(searchValue));
  }, [searchValue]);

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
      <PaginationSection>
        <Pagination
          total={total}
          currentPage={currentPage}
          onGetPage={handlePageClick}
        />
      </PaginationSection>
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
  background-color: #f7cf47;
  color: #ffffff;
  width: 110px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
`;

const PaginationSection = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
`;
