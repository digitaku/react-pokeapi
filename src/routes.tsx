import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pokemon/:name">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
