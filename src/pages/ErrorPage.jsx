import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center bg-light">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-dark mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-highlight text-white px-6 py-2 rounded-lg hover:bg-highlight-dark transition"
      >
        Go Back to Home
      </Link>
    </section>
  );
}
