import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/index.jsx";
import "./styles/index.scss";
import Container from "./components/Container/Container.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Container>
          <RoutesConfig />
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
