import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Description" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
