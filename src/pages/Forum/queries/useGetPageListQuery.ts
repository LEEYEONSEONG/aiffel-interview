import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { getPageList } from 'redux/modules/forum';

export const fetchGetPageList = async ({
  value,
  currentPage,
}: {
  value: string;
  currentPage: number;
}) => {
  const { data } = await axios.get(
    `/forum?q=${value}&_page=${currentPage}&_limit=5`,
  );

  return data;
};

const useGetPageListQuery = () => {
  const dispatch = useDispatch();
  return useMutation(fetchGetPageList, {
    onSuccess: (data) => {
      dispatch(getPageList(data));
    },
    onError: (error) => {
      console.error('get page list error', error);
    },
  });
};

export default useGetPageListQuery;
