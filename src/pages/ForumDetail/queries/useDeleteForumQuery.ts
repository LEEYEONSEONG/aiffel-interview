import axios, { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const fetchLikeToggle = async (id: string) => {
  const { data } = await axios.delete(`/forum/${id}`);

  return data;
};

const useDeleteForumQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(fetchLikeToggle, {
    onSuccess: () => {
      queryClient.invalidateQueries(['forum', 'list']);
      navigate('/forum');
    },
    onError: (e: AxiosError) => {
      console.error('post delete forum error');
    },
  });
};

export default useDeleteForumQuery;
