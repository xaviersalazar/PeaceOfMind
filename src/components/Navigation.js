import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import $ from "jquery";
import { NavLink as RouterNavLink } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if ($(window).scrollTop() >= 30) {
      $("#navbar").addClass("navbar-scroll");
    } else {
      $("#navbar").removeClass("navbar-scroll");
    }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav>
        <Navbar className="fixed-top" light expand="md" id="navbar">
          <NavbarBrand>
            <RouterNavLink to="/">Peace Of Mind</RouterNavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <RouterNavLink to="/about">About</RouterNavLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <RouterNavLink to="/contact">Contact</RouterNavLink>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}
