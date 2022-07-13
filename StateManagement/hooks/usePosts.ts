import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../slices';
import {fetchPosts} from '../slices/posts';
import {AppDispatch} from '../App';

export default function usePosts({enabled = true}: {enabled: boolean}) {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch<AppDispatch>();
  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);
  return {
    ...posts,
    refetch: fetchData,
  };
}
