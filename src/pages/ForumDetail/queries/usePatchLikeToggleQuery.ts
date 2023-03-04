import axios, { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { ILikeForumParams } from 'types/payloadTypes';

const fetchLikeToggle = async ({ id, isLiked }: ILikeForumParams) => {
  const { data } = await axios.patch(`/forum/${id}`, {
    isLiked: !isLiked,
  });

  return data;
};

const usePatchLikeToggleQuery = () => {
  const queryClient = useQueryClient();

  return useMutation(fetchLikeToggle, {
    onSuccess: () => {
      queryClient.invalidateQueries(['forum', 'detail']);
    },
    onError: (e: AxiosError) => {
      console.error('post new forum error');
    },
  });
};

export default usePatchLikeToggleQuery;
