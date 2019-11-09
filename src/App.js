import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import reset from "styled-reset";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HistoricalData from "./pages/HistoricalData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GainTracker from "./pages/GainTracker";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  flex-wrap: wrap;
  min-height: 100vh;
  display: grid;
  grid-gap: 1em;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Header />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/historical-data" component={HistoricalData} />
            <Route path="/gain-tracker" component={GainTracker} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
