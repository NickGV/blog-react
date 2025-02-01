import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Comments = () => {
  const { id: postId } = useParams();
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const response = await fetch(
        `https://blogi-api.up.railway.app/comments/post/${postId}`
      );
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://blogi-api.up.railway.app/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: newComment, postId }),
      });
      const data = await response.json();
      setComments((prevComments) => [...prevComments, data.comment]);
      setNewComment("");
      setError("");
    } catch (error) {
      console.error("Error adding comment", error);
      setError("An error occurred while adding the comment");
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`https://blogi-api.up.railway.app/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  };

  return (
    <div className="comments-section mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Comments</h2>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="comment mb-4 p-4 border rounded-lg bg-gray-800 text-white shadow-md"
        >
          <div className="flex items-center mb-2">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={`https://ui-avatars.com/api/?name=${comment.author.username}&background=random`}
                alt={comment.author.username}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-300">
                {comment.author.username}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="mb-2">{comment.content}</p>
          {user && user.id === comment.authorId && (
            <button
              className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
      {user && (
        <div className="add-comment mt-4">
          <textarea
            className="w-full p-4 border rounded-lg bg-gray-800 text-white"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      )}
    </div>
  );
};
