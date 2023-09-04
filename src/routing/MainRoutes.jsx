import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductEditPage from "../pages/ProductEditPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {

  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/register",
      element: <RegisterPage />,
    },
    {
      id: 3,
      path: "/login",
      element: <LoginPage />,
    },
    {
      id: 4,
      path: "/products",
      element: <ProductsPage />,
    },
    {
      id: 5,
      path: "/products/:id",
      element: <ProductDetailsPage />,
    },
    {
      id: 6,
      path: "/product-edit/:id",
      element: <ProductEditPage />,
    },
    {
      id: 7,
      path: "/product-create",
      element: <ProductCreatePage />,
    },
    {
      id: 8,
      path: "/cart",
      element: <CartPage />,
    }
  ];


  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
