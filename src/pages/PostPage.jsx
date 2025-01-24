import { useParams } from "react-router-dom";
import { Post } from "../components/Post";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export const PostPage = () => {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto flex w-full h-screen overflow-y-auto p-4 mt-16">
      <Post post={post} />
    </div>
  );
};
