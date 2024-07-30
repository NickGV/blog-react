import { useContext } from "react";
import { PostsList } from "../components/PostsList";
import { SearchBar } from "../components/SearchBar";
import { PostsContext } from "../context/PostsContext";

export const HomePage = () => {
  const { posts } = useContext(PostsContext);

  console.log(posts);

  return (
    <main className="text-white p-4 w-full flex flex-col h-screen">
      <SearchBar />
      <div className="h-full">
        <section className="flex flex-col h-1/2">
          <h1 className="text-3xl font-bold">My blogs</h1>
          <PostsList posts={posts} style="list"/>
        </section>
        <section className="flex flex-col h-1/2">
          <h1 className="text-3xl font-bold">Blogs Posted</h1>
          <PostsList posts={posts} style="grid"/>
        </section>
      </div>
    </main>
  );
};
