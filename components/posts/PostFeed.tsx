import usePosts from "@/hooks/usePosts";
import { FC } from "react";
import { PostItem } from "./PostItem";
interface Props {
  userId?: string;
}
export const PostFeed: FC<Props> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);
  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} data={post} key={post.id} />
      ))}
    </>
  );
};
