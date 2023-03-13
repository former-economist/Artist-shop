import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DrawPage from "./pages/DrawPage";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import LoginPage from "./pages/Loginpage/LoginPage";
import CartPage from "./pages/CartPage";
import InspirationPage from "./pages/InspirationPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/Workpage/WorkPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/draw", element: <DrawPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/inspiration", element: <InspirationPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
