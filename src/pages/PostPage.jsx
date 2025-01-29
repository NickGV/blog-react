import { useParams, useNavigate } from "react-router-dom";
import { Post } from "../components/Post";
import { Comments } from "../components/Comments";
import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";

export const PostPage = () => {
  const { posts, updatePost, deletePost } = useContext(PostsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [tags, setTags] = useState(post?.tags.join(", ") || "");
  const [image, setImage] = useState(post?.image || "");
  const [error, setError] = useState("");

  if (!post) {
    return <p>Post not found</p>;
  }

  const handleUpdate = async () => {
    if (!title.trim() || !content.trim() || !tags.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const updatedPost = {
      ...post,
      title,
      content,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    try {
      await updatePost(updatedPost);
      setIsEditing(false);
      setError("");
    } catch (error) {
      setError("An error occurred while updating the post.");
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(post.id);
      navigate("/");
    } catch (error) {
      setError("An error occurred while deleting the post.");
    }
  };

  return (
    <div className="container mx-auto flex w-full h-screen overflow-y-auto p-4 mt-16">
      {isEditing ? (
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="w-full p-4 mb-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none focus:border-gray-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title of your post"
          />
          <textarea
            className="w-full h-full p-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post in Markdown..."
          />
          <input
            type="text"
            className="w-full p-4 mb-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none  break-words"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
          />
          <input
            type="text"
            className="w-full p-4 mb-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
            onClick={handleUpdate}
          >
            Update Post
          </button>
          <button
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="w-full">
          <Post post={post} />
          <button
            className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
            onClick={() => setIsEditing(true)}
          >
            Edit Post
          </button>
          <button
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
            onClick={handleDelete}
          >
            Delete Post
          </button>
          <Comments />
        </div>
      )}
    </div>
  );
};
