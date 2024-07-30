import { NavLink } from "react-router-dom";

export const PostsListItem = ({ post }) => {
  return (
    <NavLink to={`/post/${post.id}`}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12">
          <img src={post.image} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{post.title}</h1>
          <p>{post.tags[0]}</p>
        </div>
      </div>
    </NavLink>
  );
};
