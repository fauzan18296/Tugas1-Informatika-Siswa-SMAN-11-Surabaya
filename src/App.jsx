import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Storage from "./Pages/Storage";

const App = () => {
  return (
    <div>
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Storage" element={<Storage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
