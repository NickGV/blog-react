import { useContext } from "react";
import { PostsList } from "../components/PostsList";
import { PostsContext } from "../context/PostsContext";

export const ExplorePage = () => {
  const { posts } = useContext(PostsContext);
  console.log(posts)
  return (
    <div className="text-white p-4 w-full flex flex-col h-screen">
      <PostsList posts={posts} style="grid" />
    </div>
  );
};
