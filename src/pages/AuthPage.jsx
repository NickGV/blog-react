import { useState } from "react";
import { Link } from "react-router-dom";
import singUpImg from "../assets/singUpImg.jpeg";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-8 text-white w-full bg-gray-bg p-4">
      <div className="text-center md:text-left order-2 md:order-1 p-4 max-w-md">
        <Link
          to="/"
          className="text-sm border-b-2 hover:border-orange-btn transition-colors hover:text-orange-btn"
        >
          <i className="fa-solid fa-arrow-left-long mr-2"></i>
          Go back
        </Link>
        <h2 className="text-5xl font-bold mb-4 text-shadow-lg">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <p className="text-gray-text mb-4">
          {isSignUp
            ? "Create an account to enjoy all the features"
            : "Sign in to your account"}
        </p>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <a
          href="#"
          className="block text-center text-gray-text hover:underline mt-4"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
        </a>
      </div>
      <div className="order-1 md:order-2 md:w-96 md:h-96">
        <img
          src={singUpImg}
          alt="Auth"
          className="w-full h-full shadow-md shadow-white rounded-full"
        />
      </div>
    </div>
  );
};