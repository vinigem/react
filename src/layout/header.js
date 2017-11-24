import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h2><NavLink to={"/"} className="header-title">My App</NavLink></h2>
      </header>
    );
  }
}

export default Header;
