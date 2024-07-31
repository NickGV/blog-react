import { NavLink } from "react-router-dom";

export const PostsListItem = ({ post }) => {
  return (
    <NavLink
      to={`/post/${post.id}`}
      className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded hover:text-black"
    >
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div>
        <h1 className="font-bold">{post.title}</h1>
        <p className="text-sm text-gray-600 ">{post.tags[0]}</p>
      </div>
    </NavLink>
  );
};
