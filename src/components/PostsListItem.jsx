import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

export const PostsListItem = ({ post }) => {
  const { deletePost } = useContext(PostsContext);

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    deletePost(post.id);
  };

  return (
    <NavLink
      to={`/post/${post.id}`}
      className="flex items-center justify-between p-2 hover:bg-gray-200 rounded hover:text-black"
    >
      <div className="flex gap-3">
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
      </div>
      <button className="flex flex-end mr-8" onClick={handleDeleteClick}>
        <i className="fa-solid fa-trash text-2xl hover:scale-125 hover:text-orange-600 transition-all"></i>
      </button>
    </NavLink>
  );
};
