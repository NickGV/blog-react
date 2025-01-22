import { useState } from "react";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    // You can make an API call or save the user data in a database

    // Reset form fields and error message
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <>
      {error && <p className="error text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4 max-w-sm mx-auto">
        <label htmlFor="email" className="block text-gray-text">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-black-bg text-white mb-2"
        />
        <label htmlFor="password" className="block text-gray-text">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-black-bg text-white mb-2"
        />
        <button type="submit" className="w-full p-2 bg-orange-btn hover:bg-gray-hovered font-semibold rounded mt-2">
          Sign In
        </button>
      </form>
    </>
  );
};