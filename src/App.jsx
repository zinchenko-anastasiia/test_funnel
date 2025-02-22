import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/index.jsx";
import "./styles/index.scss";

function App() {
  return (
    <Router>
      <div>
        <RoutesConfig />
        <nav>
          <Link to="/gender">Gender</Link> |
          <Link to="/agreement">Agreement</Link> |<Link to="/email">Email</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
