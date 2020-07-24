import React, { Component } from "react";
import "../../components/SearchBar/SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="search" />
        <i className="fas fa-search"></i>
      </div>
    );
  }
}

export default SearchBar;
