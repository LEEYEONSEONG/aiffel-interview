import React from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Text from 'components/Text';

import { flex } from 'styles/flex';

import { IRootState } from 'types/payloadTypes';

function ForumList() {
  const navigate = useNavigate();
  const { filteredList } = useSelector((state: IRootState) => state.forum);

  const handleForumClick = (id: number) => {
    navigate(`/forum/${id}`);
  };

  return (
    <Container>
      {filteredList.length ? (
        filteredList.map((forum) => {
          const {
            id,
            title,
            tag: { name, color },
            content,
          } = forum;
          return (
            <Forum key={`forum-${id}`} onClick={() => handleForumClick(id)}>
              <Text.Medium>{title}</Text.Medium>
              <Text.Regular color="#697077">{content}</Text.Regular>
              <TagBox>
                <Tag color={color}>{name}</Tag>
              </TagBox>
            </Forum>
          );
        })
      ) : (
        <EmptyContainer>
          <Text.Medium>질문 목록이 없습니다</Text.Medium>
        </EmptyContainer>
      )}
    </Container>
  );
}

export default ForumList;

const Container = styled.div`
  margin-top: 35px;
  padding-top: 25px;
  border-top: 1px solid #c0c0c0;
`;

const Forum = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  span {
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 188px;
  overflow: auto;
`;

const Tag = styled.div<{ color: string }>`
  ${flex('center', 'center')};
  background: ${({ color }) => color && color};
  padding: 5px 6px;
  border-radius: 9px;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
`;

const EmptyContainer = styled.div`
  ${flex('center', 'center')};
  width: 100%;
  height: 700px;
`;
