import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import FullBlogPost from "./components/FullPost";

import Index from "./screens/Index";

function App() {
  
  const [title, setTitle] = useState("Default Title");

    useEffect(() => {
      // This will run when the page first loads and whenever the title changes
      document.title = title;
    }, [title]);

  return (
    <Routes>
      <Route path="/posts/:id" element={<FullBlogPost />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;
