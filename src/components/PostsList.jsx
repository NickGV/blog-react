import { PostsListItem } from "./PostsListItem";

export const PostsList = ({ posts, style }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {posts &&
        posts.map((post) => (
          <PostsListItem key={post.id} post={post} style="" />
        ))}
    </div>
  );
};
