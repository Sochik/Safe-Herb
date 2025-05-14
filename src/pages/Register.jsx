import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../assets/images";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    address: "",
    town: "",
    city: "",
    zipCode: "",
    specificDetails: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post("https://safeherb-server.onrender.com/register", formData);
      console.log("Registration successful:", response.data);
      alert("Registration successful! Redirecting to login...");
      navigate("/login");
    } catch (err) {
      console.error("Error during registration:", err.response?.data || err.message);
      alert(err.response?.data?.error || "An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={register}
          alt="Register"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Register</h1>
      <form
        className="space-y-4 md:w-2/6 mx-auto bg-backdrop p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {[
          { id: "name", label: "Username", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "password", label: "Password", type: "password", minLength: 6 },
          { id: "age", label: "Age", type: "number", min: 21 },
          { id: "phone", label: "Phone Number", type: "tel", pattern: "[0-9]{10,15}" },
          { id: "address", label: "Address", type: "textarea", placeholder: "Street Address" },
          { id: "town", label: "Town", type: "text" },
          { id: "city", label: "City", type: "text" },
          { id: "zipCode", label: "Zip Code", type: "text", pattern: "\\d{4,10}" },
          {
            id: "specificDetails",
            label: "Other Specific Address Details",
            type: "textarea",
            placeholder: "Apartment, suite, unit, building, floor, etc.",
            required: false,
          },
        ].map(({ id, label, type, ...props }) => (
          <div className="flex flex-col" key={id}>
            <label htmlFor={id} className="text-lg font-semibold text-dark mb-2">
              {label}:
            </label>
            {type === "textarea" ? (
              <textarea
                id={id}
                name={id}
                className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-highlight"
                value={formData[id]}
                onChange={handleChange}
                {...props}
              ></textarea>
            ) : (
              <input
                id={id}
                name={id}
                type={type}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-highlight"
                value={formData[id]}
                onChange={handleChange}
                required
                {...props}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className={`w-full font-bold py-2 px-4 rounded-lg transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-highlight text-white hover:bg-highlight-dark"
          }`}
        >
          {loading ? "Registering..." : "Register"}
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
          Join the Safe Herb Community and unlock access to premium psychedelics,
          microdosing solutions, grow kits, and personalized guides designed to support
          your exploration and transformation. Whether you’re new or experienced, we provide
          a safe, discreet, and informed space to begin your journey.
          <br />
          By signing up, you agree with our{" "}
          <Link to="/Terms" className="text-highlight font-bold hover:underline">
            Terms and Conditions
          </Link>{" "}
          and acknowledge our{" "}
          <Link to="/Terms#PrivacyPolicy" className="text-highlight font-bold hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
