import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
const Auth = () => {
  const { isAuth } = useAuthContext();
  console.log(isAuth);
  if (isAuth) return <Navigate to="/" />;
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default Auth;
