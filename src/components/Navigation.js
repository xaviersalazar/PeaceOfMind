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
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background: transparent;
  width: 100%;
  height: 75px;
  transition: 0.8s all;

  a {
    color: #3d3d3d !important;
    text-decoration: none;
    text-transform: uppercase;
  }

  .navbar-brand {
    font-weight: 900 !important;
  }

  .nav-link {
    font-weight: 200 !important;
  }
`;

const StyledNavbarToggler = styled(NavbarToggler)`
  border: none !important;
`;

const StyledNavbarCollapse = styled(Collapse)`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: 0.8s all;
`;

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
      $("#navbar-collapsed").css({
        "background": "#fff",
        "box-shadow":
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
      });
    } else {
      $("#navbar").removeClass("navbar-scroll");
      $("#navbar-collapsed").css({
        "background": "transparent",
        "box-shadow": "none"
      });
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
        <StyledNavbar className="fixed-top" light expand="md" id="navbar">
          <NavbarBrand>
            <RouterNavLink to="/">Peace Of Mind</RouterNavLink>
          </NavbarBrand>
          <StyledNavbarToggler onClick={this.toggle} />
          <StyledNavbarCollapse
            isOpen={this.state.isOpen}
            navbar
            id="navbar-collapsed"
          >
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
          </StyledNavbarCollapse>
        </StyledNavbar>
      </nav>
    );
  }
}
