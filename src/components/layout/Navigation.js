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
    text-decoration: none !important;
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

const StyleDropdownMenu = styled(DropdownMenu)`
  border: none !important;
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
  border-radius: 8px !important;
`;

const StyleDropdownItem = styled(DropdownItem)`
  & {
    :hover {
      background: linear-gradient(-45deg, #b3ffab, #12fff7);
    }
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
      $(".dropdown-menu").css("background", "#fff");
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
                <StyleDropdownMenu right>
                  <StyleDropdownItem>
                    <RouterNavLink to="/besame/about">
                      ABOUT BESAME
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/besame/lipstick">
                      LIPSTICK
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/besame/face">FACE</RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/besame/eyes">EYES</RouterNavLink>
                  </StyleDropdownItem>
                </StyleDropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SALON
                </DropdownToggle>
                <StyleDropdownMenu right>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/about">
                      ABOUT OUR SALON
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/haircuts">HAIRCUTS</RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/hair-coloring">
                      HAIR COLORING
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/hair-extensions">
                      HAIR EXTENSIONS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/hair-highlights">
                      HAIR HIGHLIGHTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/hair-treatments">
                      HAIR TREATMENTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/mens-services">
                      MENS SERVICES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/perms">PERMS</RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/sets-twists">
                      SETS &amp; TWISTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/locs">LOCS</RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/relaxer">RELAXER</RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/straightening-services">
                      STRAIGHTENING SERVICES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/natural-styling">
                      NATURAL STYLING
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/specialty-extensions">
                      SPECIALTY w/ EXTENSIONS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/salon/finishing-touches">
                      FINISHING TOUCHES
                    </RouterNavLink>
                  </StyleDropdownItem>
                </StyleDropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SERVICES
                </DropdownToggle>
                <StyleDropdownMenu right>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/massages">
                      MASSAGES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/deluxe-couples">
                      DELUXE/COUPLES MASSAGES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/facials">
                      FACIALS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/waxes">WAXES</RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/scrubs-weightloss">
                      SCRUBS/WEIGHTLOSS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/infrared-sauna">
                      INFRARED SAUNA
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/oxygen-bar">
                      OXYGEN BAR
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/oxygen-foot-soak">
                      OXYGEN FOOT SOAK
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink to="/services/addons">
                      ADD ON'S
                    </RouterNavLink>
                  </StyleDropdownItem>
                </StyleDropdownMenu>
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
