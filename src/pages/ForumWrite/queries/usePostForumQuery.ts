import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { useNavigate } from 'react-router-dom';

import { INewForumParams } from 'types/payloadTypes';

const SELECTED_COLOR: { [key: string]: string } = {
  general: '#c0c0c0',
  tip: '#f4d757',
  bug: '#ff1357',
  learn: '#aaecff',
};

const fetchPostNewForum = async ({
  title,
  content,
  selectedOption,
}: INewForumParams) => {
  const { data } = await axios.post('/forum', {
    title,
    content,
    isLiked: false,
    tag: {
      name: selectedOption,
      color: SELECTED_COLOR[selectedOption],
    },
  });

  return data;
};

export const usePostForumQuery = () => {
  const navigate = useNavigate();

  return useMutation(fetchPostNewForum, {
    onSuccess: (data) => {
      navigate(`/forum/${data.id}`);
    },
    onError: (e: AxiosError) => {
      console.error('post new forum error');
    },
  });
};
