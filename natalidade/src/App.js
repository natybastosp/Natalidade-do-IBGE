import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home"; // Make sure to create and import Home component
import Dashboard from "./pages/Dashboard"; // Make sure to create and import Dashboard component

const Sidebar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="bg-indigo-900 text-stone-200 h-screen w-56 fixed left-0 top-0 shadow-lg">
      <header className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold p-5">Nataliada Br</h1>
      </header>
      <div className="grid grid-cols-1 gap-2 pt-6 mr-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "hover:bg-indigo-600 bg-indigo-500 text-white py-5 pl-5 ml-0 rounded-r-full transition duration-300"
              : "hover:bg-indigo-600 text-white py-5 pl-5 ml-0 rounded-r-full transition duration-300"
          }
        >
          Home
        </NavLink>
      </div>
      {isDashboard && (
        <div className="grid grid-cols-1 gap-2 pt-6 mr-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "hover:bg-indigo-600 bg-indigo-500 text-white py-5 pl-5 ml-0 rounded-r-full transition duration-300"
                : "hover:bg-indigo-600 text-white py-5 pl-5 ml-0 rounded-r-full transition duration-300"
            }
          >
            Dashboard
          </NavLink>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
