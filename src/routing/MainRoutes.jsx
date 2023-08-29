import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

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
            id: 3,
            path: "/products",
            element: <ProductsPage />,
        },
    ];

    return (
        <Routes>
            {ROUTES.map((route) => (
                <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default MainRoutes;
