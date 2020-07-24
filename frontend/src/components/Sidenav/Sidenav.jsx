import React, { Component } from "react";
import "../../App.css";
import "../Sidenav/Sidenav.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon_dash from "../../images/dashboard.svg";
import icon_user from "../../images/customer.svg";
import icon_book from "../../images/book.svg";
import icon_transaction from "../../images/transaction.svg";

class Sidenav extends Component {
  render() {
    return (
      <nav>
        <p className="logo">
          <img src={logo} alt="logo" />
          LOGO
        </p>
        <NavLink exact to="/">
          <img className="icon" src={icon_dash} alt="dashboard icon" />{" "}
          Dashboard
        </NavLink>
        <NavLink exact to="/students">
          <img className="icon" src={icon_user} alt="users icon" /> Students
        </NavLink>
        <NavLink exact to="/books">
          <img className="icon" src={icon_book} alt="book icon" /> Books
        </NavLink>
        <NavLink exact to="/transactions">
          <img className="icon" src={icon_transaction} alt="transaction icon" />{" "}
          Transactions
        </NavLink>
      </nav>
    );
  }
}

export default Sidenav;
