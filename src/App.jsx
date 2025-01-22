import { AuthProvider } from "./context/AuthProvider";
import { Layout } from "./Layout";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
