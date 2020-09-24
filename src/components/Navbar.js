import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  state = { isOpen: false };

  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/">
              <img src={logo} alt="Resort hotel"></img>
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.toggleNavbar}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
