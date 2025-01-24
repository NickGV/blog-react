import { Link } from "react-router-dom";
import singUpImg from "../assets/singUpImg.jpeg";

export const WelcomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-8 text-white w-full bg-gray-bg p-4 mt-16">
      <div className="text-center md:text-left order-2 md:order-1 p-4 max-w-md">
        <h2 className="text-5xl font-bold mb-4 text-shadow-lg">
          Welcome to Blogi & start exploring
        </h2>
        <p className="text-gray-text mb-4">
          Discover new blogs and engage with content easily. You can explore as
          a guest or become a member to enjoy more features.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            className="w-full md:w-auto p-4 bg-orange-btn hover:bg-gray-hovered font-semibold rounded"
            to="/home"
          >
            Explore as Guest
          </Link>
          <Link
            className="w-full md:w-auto p-4 bg-orange-btn hover:bg-gray-hovered font-semibold rounded"
            to="/auth"
          >
            Become a Member
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2 md:w-96 md:h-96">
        <img
          src={singUpImg}
          alt="Welcome"
          className="w-full h-full shadow-md shadow-white rounded-full"
        />
      </div>
    </div>
  );
};
