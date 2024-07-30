import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Create } from "./components/Create";
import { PostsProvider } from "./context/PostsProvider";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { PostPage } from "./pages/PostPage";

function App() {
  return (
    <>
      <PostsProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/post/new" element={<Create />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </PostsProvider>
    </>
  );
}

export default App;
