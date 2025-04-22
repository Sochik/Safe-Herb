import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../assets/images";

export default function Register() {
  const navigate = useNavigate();
useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    
    <div className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
      {/* Header Image */}
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={register}
          alt="Register"
          aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Register
      </h1>
      <form
        className="space-y-4 md:w-2/6 mx-auto bg-backdrop p-6 rounded-lg shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/login"); // Redirect to the login page after registration
        }}
      >
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
            htmlFor="email"
            className="text-lg font-semibold text-dark mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
        <div className="flex flex-col">
          <label htmlFor="age" className="text-lg font-semibold text-dark mb-2">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            min="21"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-lg font-semibold text-dark mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-lg font-semibold text-dark mb-2"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            required
            placeholder="Street Address"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 resize-none focus:ring-highlight"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="town"
            className="text-lg font-semibold text-dark mb-2"
          >
            Town:
          </label>
          <input
            type="text"
            id="town"
            name="town"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="city"
            className="text-lg font-semibold text-dark mb-2"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="zipCode"
            className="text-lg font-semibold text-dark mb-2"
          >
            Zip Code:
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="specificDetails"
            className="text-lg font-semibold text-dark mb-2"
          >
            Other Specific Address Details:
          </label>
          <textarea
            id="specificDetails"
            name="specificDetails"
            placeholder="Apartment, suite, unit, building, floor, etc."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none resize-none focus:ring-2 focus:ring-highlight"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-highlight text-white font-bold py-2 px-4 rounded-lg hover:bg-highlight-dark transition duration-300"
        >
          Register
        </button>
      </form>
      <p className="text-center text-dark mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-highlight font-bold hover:underline">
          Login
        </Link>
      </p>
      <div className="w-full flex flex-col items-center py-5 text-center">
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Join the Safe Herb Community and Unlock access to premium
          psychedelics, microdosing solutions, grow kits, and personalized
          guides designed to support your exploration and transformation.
          Whether you’re new or experienced, we provide a safe, discreet, and
          informed space to begin your journey.
          <br /> By signing up, you agree with our {" "}
          <span>
            <Link
              to="/Terms"
              className="text-highlight font-bold hover:underline"
            >
              Terms and Conditions
            </Link>{" "}
            and acknowledge our{" "}
          </span>
          <span>
            <Link
              to="/Terms#PrivacyPolicy"
              className="text-highlight font-bold hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
}
