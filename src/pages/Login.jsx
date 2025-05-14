import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../assets/images";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://safeherb-server.onrender.com/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Store token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful:", user);
      navigate("/User");
    } catch (err) {
      console.error("Login error:", err);

      // Handle specific error messages
      if (err.response?.status === 401) {
        setError("Invalid email or password.");
      } else if (err.response?.status === 500) {
        setError("Server error. Please try again later.");
      } else {
        setError(err.response?.data?.error || "An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
      <div className="w-full h-[60vh] mx-auto">
        <img className="object-cover w-full h-full" src={login} alt="Login" />
      </div>

      <h1 className="text-3xl font-bold text-center text-primary mb-6">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:w-2/6 mx-auto bg-backdrop p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold text-dark mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold text-dark mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-center font-medium">{error}</p>}

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-dark">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="w-4 h-4 text-highlight border-gray-300 rounded focus:ring-highlight"
            />
            <span className="ml-2">Remember Me</span>
          </label>
          <Link to="/forgot-password" className="text-highlight hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-bold py-2 px-4 rounded-lg transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-highlight text-white hover:bg-highlight-dark"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-dark mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-highlight font-bold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
