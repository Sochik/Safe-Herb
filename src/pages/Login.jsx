import React from "react";
import { Link } from "react-router-dom";
import { login } from "../assets/images";

export default function Login() {
  return (
    <div className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
      {/* Header Image */}
      <div className="w-full h-[60vh] mx-auto">
        <img className="object-cover w-full h-full" src={login} alt="Login" />
      </div>
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Login
      </h1>
      <form className="space-y-4 md:w-2/6 mx-auto bg-backdrop p-6 rounded-lg shadow-md">
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="text-lg font-semibold text-dark mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-lg font-semibold text-dark mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="w-4 h-4 text-highlight border-gray-300 rounded focus:ring-highlight"
            />
            <label htmlFor="rememberMe" className=" ml-2 text-dark">
              Remember Me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-highlight hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Link
          to={"/user"}
          // onClick={handleLogin} // Uncomment this when a login function is ready, change Link to button
          type="submit"
          className="w-full bg-highlight text-white font-bold py-2 px-4 rounded-lg hover:bg-highlight-dark transition duration-300"
        >
          Login
        </Link>
      </form>
      <p className="text-center text-dark mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-highlight font-bold hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
