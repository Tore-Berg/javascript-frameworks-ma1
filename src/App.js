import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/my-portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
