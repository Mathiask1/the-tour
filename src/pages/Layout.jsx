import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/App.css';

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;