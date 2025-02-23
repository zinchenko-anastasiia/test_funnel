import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/index.jsx";
import "./styles/index.scss";
import Container from "./components/Container/Container.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";
import RedirectOnPageReload from "./components/RedirectOnPageReload/RedirectOnPageReload.jsx";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <RedirectOnPageReload />
        <Container>
          <RoutesConfig />
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
