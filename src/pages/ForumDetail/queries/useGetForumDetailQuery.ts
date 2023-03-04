import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

import { IForumData } from 'types/payloadTypes';

const fetchForumDetail = async (id: string) => {
  const { data } = await axios.get(`/forum?id=${id}`);

  return data;
};

const useGetForumDetailQuery = (id: string) => {
  return useQuery<IForumData[], AxiosError>(
    ['forum', 'detail', id],
    () => fetchForumDetail(id),
    {
      onError: (error) => {
        console.error('get forum list error', error);
      },
    },
  );
};

export default useGetForumDetailQuery;
