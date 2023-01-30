import "normalize.css";

import React, { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { RoomPage } from "./RoomPage";

export const App = () => {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/rooms/:roomId" element={<RoomPage />} />
        </Routes>
      </Router>
    </StrictMode>
  );
};
