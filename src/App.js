import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import reset from "styled-reset";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HistoricalData from "./pages/HistoricalData";
import Home from "./pages/Home";
import News from "./pages/News";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import GainTracker from "./pages/GainTracker";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  min-height: 100vh;
  display: grid;

  grid-gap: 1rem;
  padding: 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const theme = {
  light: {
    background: "white",
    color: "black"
    // lightBtn: "#00cc8a"
  },
  dark: {
    background: "#191734",
    color: "white"
    // darkBtn: "#00cc8a"
  }
};

class App extends React.Component {
  state = {
    isLight: true
  };

  toggleTheme = () => this.setState({ isLight: !this.state.isLight });

  render() {
    return (
      <ThemeProvider theme={this.state.isLight ? theme.light : theme.dark}>
        <Container>
          <GlobalStyle />
          <Router>
            <Header toggleTheme={this.toggleTheme} />
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/historical-data"
                  component={HistoricalData}
                />
                <Route
                  exact
                  path="/historical-data/:coin"
                  component={HistoricalData}
                />
                <Route path="/gain-tracker" component={GainTracker} />
                <Route path="/news" component={News} />
                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
              </Switch>
            </div>
            <Footer />
          </Router>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
