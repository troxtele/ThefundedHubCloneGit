import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import "./App.css";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contact" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
