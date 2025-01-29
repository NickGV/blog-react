import { PostsGridItem } from "./PostsGridItem";

export const PostsGrid = ({ posts }) => {
  console.log(posts)
  return (
    <div className="overflow-x-auto h-full">
      <div className="grid grid-flow-col md:grid-flow-row auto-cols-max gap-2 mt-2 md:h-full overflow-y-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto md:overflow-x-hidden">
        {posts &&
          posts.map((post) => <PostsGridItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};
