import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutScreen } from "./AboutScreen";
import { HomeScreem } from "./HomeScreem";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">

        <Routes>
          <Route path="/" element={<HomeScreem />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<HomeScreem />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};
