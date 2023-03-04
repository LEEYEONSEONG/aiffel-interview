import React, { useEffect } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { BackIcon, Text } from 'components';
import styled from 'styled-components';

import { getForumDetail } from 'redux/modules/forum';

import { flex } from 'styles/flex';
import { fitImg } from 'styles/mixins';
import { deleteIcon, likeIcon, likeIconActive } from 'assets';

import { IRootState } from 'types/payloadTypes';

function ForumDetail() {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { forum } = useSelector((state: IRootState) => state.forum);
  const {
    title,
    content,
    tag: { name, color },
    isLiked,
  } = forum;

  const fetchForumDetail = async (id: string) => {
    const { data } = await axios.get(`/forum?id=${id}`);
    dispatch(getForumDetail(data[0]));
  };

  const handleLikeToggle = async () => {
    const { status } = await axios.patch(`/forum/${id}`, {
      isLiked: !isLiked,
    });
    if (status === 200) {
      fetchForumDetail(id);
    }
  };

  const handleDetailDelete = async () => {
    const confirm = window.confirm('정말로 삭제하시겠습니까?');

    if (confirm) {
      const { status } = await axios.delete(`/forum/${id}`);
      if (status === 200) {
        navigate('/forum');
      }
    }
  };

  useEffect(() => {
    fetchForumDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Forum>
      <BackIcon path="/forum" />
      <Text.Large>{title}</Text.Large>
      <TagBox>
        <Tag color={color}>{name}</Tag>
      </TagBox>
      <Text.Medium color="#697077">{content}</Text.Medium>
      <LikeWrap>
        <LikeIcon onClick={() => handleLikeToggle()}>
          <img alt="like" src={isLiked ? likeIconActive : likeIcon} />
        </LikeIcon>
        <DeleteIcon onClick={() => handleDetailDelete()}>
          <img alt="delete" src={deleteIcon} />
        </DeleteIcon>
      </LikeWrap>
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
