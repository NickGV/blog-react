import { useEffect, useState } from "react";
import { PostsContext } from "./PostsContext";
import postsData from "../data/posts.json"; // Asegúrate de que el path sea correcto

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");

    try {
      const parsedPosts = storedPosts ? JSON.parse(storedPosts) : [];

      setPosts(parsedPosts);
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      setPosts([]);
    }

    if (posts.length === 0) {
      loadPostsFromJson();
    }
  }, []);

  const loadPostsFromJson = () => {
    try {
      const postsFromJson = postsData.map((post) => ({
        ...post,
        comments: post.comments || [],
      }));
      setPosts(postsFromJson);
      localStorage.setItem("posts", JSON.stringify(postsFromJson));
    } catch (error) {
      console.error("Error loading posts from JSON", error);
    }
  };

  const addPost = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const updatePost = (post) => {
    const updatedPosts = posts.map((p) => (p.id === post.id ? post : p));
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        addPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
