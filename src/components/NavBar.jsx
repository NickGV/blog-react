import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <div className="bg-gray-bg text-white z-10 fixed md:relative md:top-0 md:left-0 md:h-screen md:w-64 lg:h-screen lg:w-64 lg:left-0 lg:top-0 h-16 w-full bottom-0 left-0 top-auto">
      <div className="mt-4">
        <h1 className="text-2xl font-bold hidden md:block px-4">My Blog</h1>
        <nav className="mt-6 lg:mt-6 sm:mt-0 flex justify-around md:flex-col">
          <ul className="flex md:flex-col">
            <NavLink to="/">
              <li className="hover:rounded md:hover:rounded-none py-2 px-4 hover:bg-gray-hovered cursor-pointer">
                <i className="fa-solid fa-house mr-2"></i>Home
              </li>
            </NavLink>
            <NavLink to="/explore">
              <li className="hover:rounded md:hover:rounded-none py-2 px-4 hover:bg-gray-hovered cursor-pointer">
                <i className="fa-solid fa-earth-americas mr-2"></i>Explore
              </li>
            </NavLink>
            {isAuthenticated && (
              <NavLink to="/post/new">
                <li className="hover:rounded md:hover:rounded-none py-2 px-4 hover:bg-gray-hovered cursor-pointer">
                  <i className="fa-solid fa-plus mr-2"></i> New Post
                </li>
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
      <div className="mt-auto flex justify-around md:flex-col items-center md:items-start p-4">
        {isAuthenticated ? (
          <>
            <div className="flex items-center">
              <div className="bg-orange-btn text-white rounded-full w-8 h-8 flex items-center justify-center">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2">{user.username}</span>
            </div>
            <button
              onClick={logout}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/auth">
            <button className="bg-orange-btn hover:bg-gray-hovered text-white font-semibold py-2 px-4 rounded">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};
