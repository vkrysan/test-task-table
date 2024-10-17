import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./pages/Products.tsx";
import PricePlans from "./pages/PricePlans.tsx";
import Pages from "./pages/Pages.tsx";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="link" to="/price-plans">
              Price Plans
            </Link>
          </li>
          <li>
            <Link className="link" to="/pages">
              Pages
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/price-plans" element={<PricePlans />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </Router>
  );
};

export default App;
