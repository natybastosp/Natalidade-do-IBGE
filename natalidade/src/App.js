import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <div className="bg-indigo-900 text-stone-200 p-4 h-screen w-56 fixed left-0 top-0 shadow-lg ">
          <header className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold">Nataliada Br</h1>
          </header>
          <div className="grid grid-cols-1 gap-2 pt-6">
            <Link
              to="/"
              className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
