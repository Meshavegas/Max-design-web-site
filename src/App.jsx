import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import "./index.css";
import RealisationPage from "./page/Realisation";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" exactly element={<Home />} />
        <Route path="/realisations" exactly element={<RealisationPage />} />
      </Routes>
    </div>
  );
}

export default App;
