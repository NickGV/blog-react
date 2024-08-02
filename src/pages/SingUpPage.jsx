import { useState } from "react";
import singUpImg from "../assets/singUpImg.jpeg";

export const SignUpPage = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    handleLogin();
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Perform sign-up logic here
    // You can make an API call or save the user data in a database

    // Reset form fields and error message
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-4 text-white w-full">
      <div className="text-center md:text-left order-2 md:order-1 p-4">
        <h2 className="text-5xl font-bold mb-2 whitespace-pre-line">
          Welcome to Blogi & start exploring
        </h2>
        <p>Discover new blogs and engage with content easily</p>

        <button
          className="w-full md:w-36 p-4 bg-gray-700 hover:bg-gray-600 font-semibold rounded mt-4"
          onClick={handleLogin}
        >
          Continue
        </button>
        {/* {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form> */}
      </div>
      <div className="order-1 md:order-2 md:w-96  md:h-96 ">
        <img
          src={singUpImg}
          alt=""
          className="w-full h-full shadow-md shadow-white rounded-full"
        />
      </div>
    </div>
  );
};
