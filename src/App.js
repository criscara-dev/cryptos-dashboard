import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HistoricalData from "./pages/HistoricalData";
import Home from "./pages/Home";
import News from "./pages/News";
import GainTracker from "./pages/GainTracker";
import { Container, theme } from "./components/ui";
import Notfound from "./components/NotFound";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

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
            <Header toggleTheme={this.toggleTheme} icon={this.state.isLight} />
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
