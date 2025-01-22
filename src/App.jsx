import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { PostsProvider } from "./context/PostsProvider";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { PostPage } from "./pages/PostPage";
import { CreatePage } from "./pages/CreatePage";
import { useState } from "react";
import { WelcomePage } from "./pages/WelcomePage";
import { AuthPage } from "./pages/AuthPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
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
          <Route path="/" element={<WelcomePage handleLogin={handleLogin} />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
