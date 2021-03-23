import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Page404 from "./components/Pages/Page404/Page404";
import PageHome from "./components/Pages/PageHome/PageHome";
import PageAboutUs from "./components/Pages/PageAboutUs/PageAboutUs";
import PageContactUs from "./components/Pages/PageContactUs/PageContactUs";
import Footer from "./components/Footer/Footer";
import "./App.css";

// Path route rendering
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/about-us" component={PageAboutUs} />
            <Route exact path="/contact-us" component={PageContactUs} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
