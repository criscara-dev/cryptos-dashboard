import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reset from "styled-reset";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HistoricalData from "./pages/HistoricalData";
import Home from "./pages/Home";
import News from "./pages/News";
import GainTracker from "./pages/GainTracker";
import { Container } from "./components/ui";
import Notfound from "./components/NotFound";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

const colors = {
  green: "#00cc8a",
  darkPurple: "#191734",
  gray: "#6e748e",
  mediumDarkPurple: "#262344",
  lightPurple: "#928fff",
  lightGray: "#eeeef1",
  red: "#fd5f60",
  shinyGreen: "#00faa6"
};

const theme = {
  light: {
    bg: "white",
    secondary: "#00cc8a",
    btnBgColor: "#191734",
    btnColor: "white",
    color: "black",
    colors
  },
  dark: {
    bg: "#191734",
    secondary: "#00cc8a",
    btnBgColor: "#00cc8a",
    btnColor: "black",
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
  };

  componentDidMount() {
    const isLight = localStorage.getItem("isLight");
    if (isLight === null) {
      localStorage.setItem("isLight", true);
    }
    this.setState({ isLight: isLight === "true" });
  }

  render() {
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
