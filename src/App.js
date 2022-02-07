import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Category from "./pages/Category";
import News from "./pages/News";
import NoMatch from "./pages/404";
import TemporaryDrawer from "./components/Drawer";

function App() {
  return (
    <>
      <TemporaryDrawer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="category" element={<Category />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
