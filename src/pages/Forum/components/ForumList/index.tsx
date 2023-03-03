import React from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Text from 'components/Text';

import { flex } from 'styles/flex';

import { IRootState } from 'types/payloadTypes';

function ForumList() {
  const navigate = useNavigate();
  const { forumList } = useSelector((state: IRootState) => state.forum);

  const handleForumClick = (id: number) => {
    navigate(`/forum/${id}`);
  };

  return (
    <Container>
      {forumList.length ? (
        forumList.map((forum) => {
          const {
            id,
            title,
            tag: { name, color },
            content,
          } = forum;
          return (
            <Forum key={`forum-${id}`} onClick={() => handleForumClick(id)}>
              <Text.Large>{title}</Text.Large>
              <Text.Medium color="#697077">{content}</Text.Medium>
              <TagBox>
                <Tag color={color}>{name}</Tag>
              </TagBox>
            </Forum>
          );
        })
      ) : (
        <Text.Medium>데이터가 없습니다.</Text.Medium>
      )}
    </Container>
  );
}

export default ForumList;

const Container = styled.div`
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #dde1e6;
`;

const Forum = styled.div`
  margin-bottom: 64px;
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
`;
