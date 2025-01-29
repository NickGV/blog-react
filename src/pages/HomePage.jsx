import { useContext } from "react";
import { PostsList } from "../components/PostsList";
import { PostsGrid } from "../components/PostsGrid";
import { SearchBar } from "../components/SearchBar";
import { PostsContext } from "../context/PostsContext";

export const HomePage = () => {
  const { posts } = useContext(PostsContext);

  const latestPosts = posts.slice(0, 3);

  return (
    <main className="text-white p-4 w-full flex flex-col mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
      </div>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestPosts.map((post) => (
            <div key={post.id} className="bg-black-bg p-4 rounded shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-text mb-4">{post.excerpt}</p>
              <a
                href={`/post/${post.id}`}
                className="text-orange-btn hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">All Blogs</h2>
        <PostsGrid posts={posts} />
      </section>
    </main>
  );
};
