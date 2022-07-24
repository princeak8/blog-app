import { Routes, Route } from "react-router-dom";
import "./App.css";
import FullBlogPost from "./components/FullPost";

import Index from "./screens/Index";

function App() {
  return (
    <Routes>
      <Route path="/posts/:id" element={<FullBlogPost />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;
