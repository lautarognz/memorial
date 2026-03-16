import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Memorial from "./pages/Memorial/Memorial";
import Admin from "./pages/Admin/Admin";
import CreateMemorial from "./pages/CreateMemorial/CreateMemorial";
import NotFound from "./pages/NotFound/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/memorial/:slug" element={<Memorial />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/create" element={<CreateMemorial />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
