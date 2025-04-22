import React from "react";
import { Link } from "react-router-dom";
import { user } from "../assets/images";

export default function User() {
  // Mock user data (replace with actual data from your backend or state management)
  const userInfo = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, Townsville, Cityville, 12345",
    age: 30,
    previousOrders: [
      { id: 1, item: "Mushroom Microdosing Kit", date: "2025-04-15" },
      { id: 2, item: "Psychedelic Grow Kit", date: "2025-03-10" },
    ],
  };

  return (
      <div className="container mx-auto px-4 py-8 bg-light rounded-lg shadow-lg">
          <div className="w-full h-[60vh] mx-auto">
                  <img className="object-cover w-full h-full" src={user} alt="safe_herb user" />
                </div>
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Welcome, {userInfo.username}!
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
        {userInfo.previousOrders.length > 0 ? (
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