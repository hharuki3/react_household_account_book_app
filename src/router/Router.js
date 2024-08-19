import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

export const Router = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
})