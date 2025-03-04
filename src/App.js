import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

import "./App.css";
import SkillWithParticles from "./components/SkillWithParticles";
import PortfolioWithParticles from "./components/PortfolioWithParticles";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={PortfolioWithParticles} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skill" component={SkillWithParticles} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
