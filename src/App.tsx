import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"; // Adjusted import path for Navigation
import BlogSection from "./components/BlogSection"; // Adjusted import path for BlogSection
import BlogPost from "./components/BlogPost"; // Adjusted import path for BlogPost
import Index from "./pages/Index"; // Adjusted import path for Index page
import NotFound from "./pages/NotFound"; // Adjusted import path for NotFound page

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Index />} /> {/* Main landing page */}
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
        <Route path="/blog" element={<BlogSection />} /> {/* Blog section */}
        <Route path="/blog/:postId" element={<BlogPost />} />{" "}
        {/* Individual blog post page */}
      </Routes>
    </Router>
  );
};

export default App;
  