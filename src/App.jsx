import { AuthProvider } from "./context/AuthProvider";
import { PostsProvider } from "./context/PostsProvider";
import { Layout } from "./Layout";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <Layout />
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
