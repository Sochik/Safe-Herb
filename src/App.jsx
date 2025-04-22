import { useState } from "react";
import "./index.css"; // Ensure Tailwind CSS is imported
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import Services from "./pages/Services";



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
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/Terms",
        element: <Terms />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/User",
        element: <User />,
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