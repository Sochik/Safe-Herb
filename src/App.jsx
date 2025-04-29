import React from "react";
import { Provider } from "react-redux";
import store from "./features/store";
import "./index.css";
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
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import FloatingPrompt from "./components/FloatingPrompt"; // Import the FloatingPrompt component
import ErrorPage from "./pages/ErrorPage";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <FloatingPrompt /> {/* Add the floating prompt here */}
    </>
  );
};

const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Services", element: <Services /> },
      { path: "/Shop", element: <Shop /> },
      { path: "/FAQ", element: <FAQ /> },
      { path: "/Terms", element: <Terms /> },
      { path: "/Register", element: <Register /> },
      { path: "/Login", element: <Login /> },
      { path: "/User", element: <User /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/Cart", element: <Cart /> },
      { path: "*", element: <ErrorPage /> },
      { path: "/search", element: <SearchResults /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <main className="bg-highlight min-h-screen">
        <Toaster />
        <RouterProvider router={PageRoutes}></RouterProvider>
      </main>
    </Provider>
  );
}
