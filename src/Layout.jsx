import { NavBar } from "./components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { PostPage } from "./pages/PostPage";
import { CreatePage } from "./pages/CreatePage";
import { WelcomePage } from "./pages/WelcomePage";
import { AuthPage } from "./pages/AuthPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <HomePage /> : <Navigate to="/welcome" />
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          {isAuthenticated && (
            <Route path="/post/new" element={<CreatePage />} />
          )}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>
    </>
  );
};
