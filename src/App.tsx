import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PolicyPage from "./pages/PolicyPage/PolicyPage";
import TOSPage from "./pages/TOSPage/TOSPage";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/tos" element={<TOSPage />} />
        <Route path="/p/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
