import { useContext } from "react";
import { PostsList } from "../components/PostsList";
import { PostsGrid } from "../components/PostsGrid";
import { SearchBar } from "../components/SearchBar";
import { PostsContext } from "../context/PostsContext";

export const HomePage = () => {
  const { posts } = useContext(PostsContext);

  return (
    <main className="text-white p-4 w-full flex flex-col mt-16">
      <SearchBar />
      <div className="flex flex-col h-full">
        <h1 className="text-2xl font-bold">My blogs</h1>
        <PostsList posts={posts} />

        <h1 className="text-2xl font-bold mt-4">Blogs Posted</h1>
        <PostsGrid posts={posts} />
      </div>
    </main>
  );
};
