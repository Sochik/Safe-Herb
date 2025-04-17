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
        path: "/Home",
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
        path: "/FAQ",
        element: <FAQ />,
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