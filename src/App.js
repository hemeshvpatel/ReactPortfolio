import React from "react";
import Layout from "./components/reusable/layout";
import NavBar from "./components/reusable/navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  //Idea: to be able to re-arrange the layout from here

  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
          <Layout style={{ backgroundColor: "black", color: "white" }} />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
