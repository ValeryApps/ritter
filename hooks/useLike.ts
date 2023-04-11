import { useMemo, useCallback } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";
import axios from "axios";
import { toast } from "react-hot-toast";

type Props = {
  postId: string;
  userId?: string;
};
const useLike = ({ postId, userId }: Props) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutatedFetchedPost } = usePost(postId);
  const { mutate: mutatedFetchedPosts } = usePosts(userId);

  const loginModal = useLoginModal();
  const hasLiked = useMemo(() => {
    const list: string[] = fetchedPost?.likeIds || [];
    return list.includes(currentUser?.id);
  }, [currentUser?.id, fetchedPost?.likeIds]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    try {
      let request;
      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } });
        toast.success("You have unliked this post!");
      } else {
        request = () => axios.post("/api/like", { postId });
        toast.success("You have liked this post!");
      }
      await request();
      mutatedFetchedPost();
      mutatedFetchedPosts();
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [
    currentUser,
    loginModal,
    hasLiked,
    postId,
    mutatedFetchedPost,
    mutatedFetchedPosts,
  ]);
  return {
    hasLiked,
    toggleLike,
  };
};
export default useLike;
