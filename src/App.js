import "./App.css";
import { Routes, Route } from "react-router-dom";

import User from "./pages/User";
import Category from "./pages/Category";
import News from "./pages/News";
import NoMatch from "./pages/404";

import Home from "./pages/Home/Home";
import Edit from "./pages/News/Edit";

function App() {
  return (
    <div style={{ height: 721 }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="category" element={<Category />} />
        <Route path="news" element={<News />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
