import React from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import { BackIcon, Text } from 'components';

import useGetForumDetailQuery from './queries/useGetForumDetailQuery';
import usePatchLikeToggleQuery from './queries/usePatchLikeToggleQuery';

import { flex } from 'styles/flex';
import { fitImg } from 'styles/mixins';

import { deleteIcon, likeIcon, likeIconActive } from 'assets';
import useDeleteForumQuery from './queries/useDeleteForumQuery';

function ForumDetail() {
  const { id } = useParams() as { id: string };

  const { data, isSuccess } = useGetForumDetailQuery(id);
  const { mutate: handleDeleteForum } = useDeleteForumQuery();
  const { mutate: handleLikeToggle } = usePatchLikeToggleQuery();

  const handleDetailDelete = async () => {
    const confirm = window.confirm('정말로 삭제하시겠습니까?');

    if (confirm) return handleDeleteForum(id);
  };

  return (
    <Forum>
      {isSuccess && (
        <>
          <BackIcon path="/forum" />
          <Text.Large>{data[0].title}</Text.Large>
          <TagBox>
            <Tag color={data[0].tag.color}>{data[0].tag.name}</Tag>
          </TagBox>
          <Text.Medium color="#697077">{data[0].content}</Text.Medium>
          <LikeWrap>
            <LikeIcon
              onClick={() => handleLikeToggle({ id, isLiked: data[0].isLiked })}
            >
              <img
                alt="like"
                src={data[0].isLiked ? likeIconActive : likeIcon}
              />
            </LikeIcon>
            <DeleteIcon onClick={() => handleDetailDelete()}>
              <img alt="delete" src={deleteIcon} />
            </DeleteIcon>
          </LikeWrap>
        </>
      )}
    </Forum>
  );
}

export default ForumDetail;

const Forum = styled.div`
  margin-top: 120px;
  width: 700px;
  ${flex('', '', 'column')}
  row-gap: 14px;
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow: auto;
  border-bottom: 1px solid #dde1e6;
  padding-bottom: 20px;
  margin-bottom: 15px;
`;

const Tag = styled.div<{ color: string }>`
  ${flex('center', 'center')};
  background: ${({ color }) => color && color};
  padding: 5px 6px;
  border-radius: 9px;
  color: #ffffff;
  cursor: pointer;
`;

const LikeWrap = styled.div`
  ${flex('flex-end', '')}
`;

const LikeIcon = styled.div`
  ${fitImg}
  width: 25px;
  height: 25px;
`;

const DeleteIcon = styled(LikeIcon)`
  margin-left: 12px;
`;
