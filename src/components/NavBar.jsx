import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-bg text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">My Blog</h1>
          <ul className="flex ml-4 space-x-4">
            <NavLink to="/" className="hover:bg-gray-hovered px-3 py-2 rounded">
              <li className="flex items-center">
                <i className="fa-solid fa-house mr-2"></i>Home
              </li>
            </NavLink>
            <NavLink to="/explore" className="hover:bg-gray-hovered px-3 py-2 rounded">
              <li className="flex items-center">
                <i className="fa-solid fa-earth-americas mr-2"></i>Explore
              </li>
            </NavLink>
            {isAuthenticated && (
              <NavLink to="/post/new" className="hover:bg-gray-hovered px-3 py-2 rounded">
                <li className="flex items-center">
                  <i className="fa-solid fa-plus mr-2"></i> New Post
                </li>
              </NavLink>
            )}
          </ul>
        </div>
        <div className="flex items-center">
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
                className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
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
    </nav>
  );
};
