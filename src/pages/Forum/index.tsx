import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Text } from 'components/atoms';
import { SearchBar } from 'components/molecules';
import { Pagination } from 'components/organisms';

import { getSearchList } from 'redux/modules/forum';
import useGetForumListQuery from './queries/useGetForumListQuery';
import useGetPageListQuery from './queries/useGetPageListQuery';

import { flex } from 'styles/flex';

import { IRootState } from 'types/payloadTypes';
import { ForumList } from 'components/organisms';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Container>
      <Header>
        <Text.Large weight={700}>묻고 답하기</Text.Large>
        <AddButton onClick={() => handleAddBtnClick()}>
          <Text.Small weight={700} color="#ffffff">
            새로운 질문
          </Text.Small>
        </AddButton>
      </Header>
      <SearchBar
        name="search"
        placeholder="검색어를 입력하세요."
        hasRefresh
        onChange={handleSearchInputChange}
      />
      <ForumList />
      {total > 5 && (
        <PaginationSection>
          <Pagination
            total={total}
            currentPage={currentPage}
            onGetPage={handlePageClick}
          />
        </PaginationSection>
      )}
    </Container>
  );
}

export default Forum;

const Container = styled.div`
  width: 600px;
  margin: 40px 0;
`;

const Header = styled.div`
  ${flex('space-between', '')}
  margin-bottom: 24px;
`;

const AddButton = styled(Button)`
  ${flex('center', 'center')}
  background-color: #f7cf47;
  width: 110px;
  border-radius: 8px;
  padding: 10px 0;
`;

const PaginationSection = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
`;
