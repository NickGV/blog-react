import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await signup(username, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="error text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4 max-w-sm mx-auto">
        <label htmlFor="username" className="block text-gray-text">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded bg-black-bg text-white mb-2"
        />
        <label htmlFor="email" className="block text-gray-text">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-black-bg text-white mb-2"
        />
        <label htmlFor="password" className="block text-gray-text">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-black-bg text-white mb-2"
        />
        <label htmlFor="confirm-password" className="block text-gray-text">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 rounded bg-black-bg text-white mb-2"
        />
        <button
          type="submit"
          className="w-full p-2 bg-orange-btn hover:bg-gray-hovered font-semibold rounded mt-2"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};
