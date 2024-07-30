import { MarkdownRender } from "./MarkdownRender";

export const Post = ({ post }) => {
  return (
    <div className="post flex flex-col w-full overflow-y-auto h-3/5">
      <h1 className="text-2xl font-bold mb-4 text-white">{post.title}</h1>
      {/* {post.image && <img src={post.image} alt={post.title} className="mb-4 w-12 h-12" />} */}
      <MarkdownRender content={post.content} />
      <div className="comments mt-4">
        <h2 className="text-2xl font-semibold text-white ">Comments</h2>
        {post.comments.map((comment, index) => (
          <div key={index} className="comment mt-2 p-2 border rounded text-white">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
        {post.comments.map((comment, index) => (
          <div key={index} className="comment mt-2 p-2 border rounded text-white">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
        {post.comments.map((comment, index) => (
          <div key={index} className="comment mt-2 p-2 border rounded text-white">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
        {post.comments.map((comment, index) => (
          <div key={index} className="comment mt-2 p-2 border rounded text-white">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};
