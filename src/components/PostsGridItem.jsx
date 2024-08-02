import { NavLink } from "react-router-dom";

export const PostsGridItem = ({ post }) => {
  return (
    <NavLink
      to={`/post/${post.id}`}
      key={post.id}
      className="w-32 h-28 md:w-full md:h-48 flex items-center justify-center group"
    >
      <div className="relative flex flex-col items-center w-full h-full">
        <div className="h-full w-full">
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-75 rounded"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-bold text-sm md:text-3xl text-white text-center text-shadow-lg bg-opacity-60 p-2 rounded transition-transform duration-300 group-hover:scale-105">
            {post.title}
          </h1>
        </div>
      </div>
    </NavLink>
  );
};
