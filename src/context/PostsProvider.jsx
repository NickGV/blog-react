import { useEffect, useState } from "react";
import { PostsContext } from "./PostsContext";

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPostsFromApi();
  }, []);

  const loadPostsFromApi = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error("Error fetching posts from API", error);
    }
  };

  const addPost = async (post) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, data.post]);
    } catch (error) {
      console.error("Error adding post", error);
    }
  };

  const updatePost = async (post) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === post.id ? data.post : p))
      );
    } catch (error) {
      console.error("Error updating post", error);
    }
  };

  const deletePost = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  return (
    <PostsContext.Provider
      value={{ posts, addPost, updatePost, deletePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};
