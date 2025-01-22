import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { PostsProvider } from "./context/PostsProvider";
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
      {isAuthenticated ? (
        <PostsProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/post/new" element={<CreatePage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </PostsProvider>
      ) : (
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      )}
    </>
  );
};
