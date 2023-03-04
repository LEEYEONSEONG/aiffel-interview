import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from 'redux/modules/auth';

const fetchGetUserInfo = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.get(
    `/login?email=${email}&password=${password}`,
  );

  if (!data.length) return alert('아이디와 비밀번호를 확인해주세요.');

  return data;
};

const useLoginQuery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation(fetchGetUserInfo, {
    onSuccess: (data) => {
      dispatch(getUserInfo(data[0]));
      navigate(`/forum`);
    },
    onError: (e: AxiosError) => {
      console.error('post new forum error');
    },
  });
};

export default useLoginQuery;
