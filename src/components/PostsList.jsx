import { NavLink } from "react-router-dom";

export const PostsList = ({ posts, style }) => {
  console.log(posts);
  if (style == "grid")
    return (
      <div className="grid grid-cols-4  gap-3 mt-4 h-full overflow-y-auto">
        {posts &&
          posts.map((post) => (
            <NavLink to={`/post/${post.id}`} key={post.id}>
              <div className="relative flex flex-col items-center w-full h-48">
                <div className="h-full w-full">
                  <img
                    src={post.image}
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="font-bold text-3xl text-white bg-black bg-opacity-60 p-2 rounded">
                    {post.title}
                  </h1>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    );
  if (style == "list")
    return (
      <div className="flex flex-col gap-3 mt-4 h-full overflow-y-auto">
        {posts &&
          posts.map((post) => (
            <NavLink to={`/post/${post.id}`} key={post.id}>
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
          ))}
      </div>
    );
};
