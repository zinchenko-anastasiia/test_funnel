import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/index.jsx";
import "./styles/index.scss";
import Container from "./components/Container/Container.jsx";

function App() {
  return (
    <Router>
      <Container>
        <RoutesConfig />
      </Container>
    </Router>
  );
}

export default App;
