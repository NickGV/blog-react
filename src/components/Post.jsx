import { useNavigate } from "react-router-dom";
import { MarkdownRender } from "./MarkdownRender";

export const Post = ({ post }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="post-container">
      <div className="post-header flex flex-col items-start justify-between">
        <button
          className="back-button text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
          onClick={handleBack}
        >
          Back
        </button>
        <h1 className="text-md md:text-2xl font-bold mb-4 text-white m-auto ml-0">
          {post.title}
        </h1>
      </div>
      <MarkdownRender content={post.content} style="post" />
    </div>
  );
};
