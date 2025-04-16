import { useState } from "react";
import "./index.css"; // Ensure Tailwind CSS is imported
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";



export default function App() {
  const [count, setCount] = useState("All");

  const PageLayout = () => {

    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },


    ],
  },
]);

return (
    <main className="bg-highlight min-h-screen">
      <Toaster />
      <RouterProvider router={PageRoutes}></RouterProvider>
    </main>
  );
}