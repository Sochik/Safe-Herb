import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { user as userImage } from "../assets/images";
import axios from "axios";

export default function User() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from localStorage (or wherever it's stored)
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        // Send the token in the Authorization header
        const response = await axios.get("https://safeherb-server.onrender.com/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserInfo(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.response?.data?.error || "Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={userImage}
          alt="safe_herb user"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Welcome, {userInfo.name}!
      </h1>

      {/* User Information Section */}
      <div className="bg-backdrop p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Your Information</h2>
        <p className="text-lg text-dark mb-2">
          <strong>Email:</strong> {userInfo.email}
        </p>
        <p className="text-lg text-dark mb-2">
          <strong>Phone:</strong> {userInfo.phone}
        </p>
        <p className="text-lg text-dark mb-2">
          <strong>Address:</strong> {userInfo.address}
        </p>
        <p className="text-lg text-dark">
          <strong>Age:</strong> {userInfo.age}
        </p>
      </div>

      {/* Previous Orders Section */}
      <div className="bg-backdrop p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Previous Orders</h2>
        {userInfo.previousOrders && userInfo.previousOrders.length > 0 ? (
          <ul className="list-disc pl-5">
            {userInfo.previousOrders.map((order) => (
              <li key={order.id} className="text-lg text-dark mb-2">
                <strong>{order.item}</strong> - Ordered on {order.date}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-dark">You have no previous orders.</p>
        )}
      </div>

      {/* Order Now Button */}
      <div className="text-center">
        <Link
          to="/Shop"
          className="bg-highlight text-white font-bold py-2 px-4 rounded-lg hover:bg-highlight-dark transition duration-300"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
