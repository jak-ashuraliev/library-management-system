import React, { Component } from "react";
import "../../App.css";
import "../Sidenav/Sidenav.css";
import { Link } from "react-router-dom";

class Sidenav extends Component {
  render() {
    return (
      <aside>
        <ul>
          <li>LOGO</li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Sidenav;
