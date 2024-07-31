import { PostsGridItem } from "./PostsGridItem";

export const PostsGrid = ({ posts }) => {
  return (
    <div className="overflow-x-auto h-full">
      <div className="grid grid-flow-col md:grid-flow-row auto-cols-max gap-2 mt-2 h-full overflow-y-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-y-auto sm:overflow-x-hidden">
        {posts &&
          posts.map((post) => (       
              <PostsGridItem key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};
