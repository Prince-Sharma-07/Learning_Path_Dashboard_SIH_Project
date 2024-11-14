import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Community from "./pages/Community";
import Dashboard from "./pages/Dashboard";
import Section_4 from "./pages/Section_4";
import Section_5 from "./pages/Section_5";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/community" element={<Community />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/section4" element={<Section_4 />} />
        <Route path="/section5" element={<Section_5 />} />
      </Routes>
    </>
  );
};

export default App;
