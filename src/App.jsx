import React from "react";
import "./styles/App.scss";
import Nav from "./components/shared/Nav";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Monthly from "./pages/Monthly";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/daily" component={Daily} />
        <Route exact path="/weekly" component={Weekly} />
        <Route exact path="/monthly" component={Monthly} />
      </Switch>
    </>
  );
}

export default App;
