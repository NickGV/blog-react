import { MarkdownRender } from "./MarkdownRender";

export const Post = ({ post }) => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="post flex flex-col w-full h-full">
      <div className="flex justify-center items-center">
        <button className="flex text-left text-white p-4" onClick={handleBack}>
          <i className="fa-solid fa-arrow-left-long text-3xl hover:text-orange-600 transition-colors"></i>
        </button>
        <h1 className="text-2xl font-bold mb-4 text-white m-auto ml-0">
          {post.title}
        </h1>
      </div>
      {/* {post.image && <img src={post.image} alt={post.title} className="mb-4 w-12 h-12" />} */}
      <MarkdownRender content={post.content} style="post" />
      <div className="comments mt-4">
        <h2 className="text-2xl font-semibold text-white ">Comments</h2>
        {post.comments.map((comment, index) => (
          <div
            key={index}
            className="comment mt-2 p-2 border rounded text-white"
          >
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
