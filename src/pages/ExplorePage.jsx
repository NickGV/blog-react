import { useContext } from "react";
import { PostsList } from "../components/PostsList";
import { PostsContext } from "../context/PostsContext";

export const ExplorePage = () => {
  const { posts } = useContext(PostsContext);
  return (
    <div className="text-white p-4 w-full flex flex-col h-screen">
      <PostsList posts={posts} />
    </div>
  );
};
