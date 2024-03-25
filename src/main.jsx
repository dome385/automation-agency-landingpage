import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Impressum from "./components/Impressum.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
