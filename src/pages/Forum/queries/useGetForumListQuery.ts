import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { IForumData } from 'types/payloadTypes';
import { useDispatch } from 'react-redux';
import { getForumList } from 'redux/modules/forum';

export const fetchForumList = async () => {
  const { data } = await axios.get(`/forum`);

  return data;
};

const useGetForumListQuery = () => {
  const dispatch = useDispatch();

  return useQuery<IForumData[], AxiosError>(
    ['forum', 'list'],
    () => fetchForumList(),
    {
      onSuccess(data) {
        dispatch(getForumList(data));
      },
      onError: (error) => {
        console.error('get forum list error', error);
      },
    },
  );
};

export default useGetForumListQuery;
