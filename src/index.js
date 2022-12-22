import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/default";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import PolicyRanker from "./pages/Policy/Ranker";

/** css */
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
          <Route path="contact" element={<Contact />} />
          <Route path="policy/ranker" element={<PolicyRanker />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
const root = createRoot(document.getElementById("root"));
root.render(<App />);
