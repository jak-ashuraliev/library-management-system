import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidenav from "./components/Sidenav/Sidenav";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Students/Students";
import Books from "./components/Books/Books";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="d-flex"> */}
        <Sidenav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/students" component={Students} />
          <Route path="/books" component={Books} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
