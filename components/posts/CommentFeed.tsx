import { FC } from "react";
import { CommentItem } from "./CommentItem";
interface Props {
  comments?: Record<string, any>[];
}

export const CommentFeed: FC<Props> = ({ comments }) => {
  return (
    <>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <CommentItem data={comment} />
        </div>
      ))}
    </>
  );
};
