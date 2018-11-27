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
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
  transition: 0.8s all;

  @media (min-width: 768px) {
    background: transparent;
    box-shadow: none !important;
  }
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
        background: "#fff",
        "box-shadow": "rgba(0,0,0,.12) 0 0 70px 6px;"
      });
      $(".dropdown-menu").css("background", "#fff");
    } else {
      $("#navbar").removeClass("navbar-scroll");
      $("#navbar-collapsed").css({
        background: "transparent",
        "box-shadow": "none"
      });
      $(".dropdown-menu").css("background", "transparent");
    }
  };

  toggle = () => {
    $("navbar-toggler").toggleClass("active");
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  BESAME COSMETICS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <RouterNavLink to="/besame/about">
                      ABOUT BESAME
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/besame/lipstick">
                      LIPSTICK
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/besame/face">FACE</RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/besame/eyes">EYES</RouterNavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <RouterNavLink to="/services/massages">
                      MASSAGES
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/deluxe-couples">
                      DELUXE/COUPLES MASSAGES
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/facials">
                      FACIALS
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/waxes">WAXES</RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/scrubs-weightloss">
                      SCRUBS/WEIGHTLOSS
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/infrared-sauna">
                      INFRARED SAUNA
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/oxygen-bar">
                      OXYGEN BAR
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/oxygen-foot-soak">
                      OXYGEN FOOT SOAK
                    </RouterNavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <RouterNavLink to="/services/addons">
                      ADD ON'S
                    </RouterNavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#contact">CONTACT US</NavLink>
              </NavItem>
            </Nav>
          </StyledNavbarCollapse>
        </StyledNavbar>
      </nav>
    );
  }
}
