import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Header = () => {
  return (
    <div className="bg-white shadow-md p-6 top-0 w-full z-40 fixed">
      <nav className="flex justify-around">
        <ul className="flex space-x-6">
          <li>
            <a className="text-gray-700 font-bold text-lg hover:text-blue-900">
              Natalidade no Brasil
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
