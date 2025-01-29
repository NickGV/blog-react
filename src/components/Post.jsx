import { MarkdownRender } from "./MarkdownRender";
import { Comments } from "./Comments";

export const Post = ({ post }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <button className="back-button">Back</button>
        <h1 className="text-md md:text-2xl font-bold mb-4 text-white m-auto ml-0">
          {post.title}
        </h1>
      </div>
      <MarkdownRender content={post.content} style="post" />
    </div>
  );
};
