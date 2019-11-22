import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
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

import { Container } from "./components/customStyles";
import Notfound from "./components/NotFound";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

// const Container = styled.div`
//   font-family: "Montserrat", sans-serif;
//   font-size: 100%;
//   min-height: 100vh;
//   display: grid;
//   grid-gap: 1rem;
//   padding: 2rem;
//   background: ${props => props.theme.background};
//   color: ${props => props.theme.color};
// `;

const colors = {
  green: "#00cc8a",
  darkBlue: "#191734"
};

const theme = {
  light: {
    main: "white",
    secondary: "#00cc8a",
    color: "black",
    colors
  },
  dark: {
    main: "#191734",
    secondary: "#00cc8a",
    color: "white",
    colors
  }
};

class App extends React.Component {
  state = {};

  toggleTheme = () => {
    const isLight = !this.state.isLight;
    localStorage.setItem("isLight", !!isLight);
    this.setState({ isLight });

    //
  };

  componentDidMount() {
    const isLight = localStorage.getItem("isLight");
    if (isLight === null) {
      localStorage.setItem("isLight", true);
    }

    this.setState({ isLight: isLight === "true" });
  }

  render() {
    console.log(this.state.isLight);
    const selectedTheme = this.state.isLight ? theme.light : theme.dark;
    const newTheme = {
      isLight: this.state.isLight,
      ...selectedTheme
    };
    return (
      <ThemeProvider theme={newTheme}>
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
                <Route exact path="/not-found" component={Notfound} />
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
