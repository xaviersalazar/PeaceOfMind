import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import $ from "jquery";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

const windowWidth = $(window).width();

const LogoImg = styled.img`
  width: 75px;
  position: absolute;
  left: 15px;
  top: 10px;
  transition: 0.8s all;

  @media (min-width: 992px) {
    width: 80px;
  }
`;

const StyledNavbar = styled(Navbar)`
  background: transparent;
  width: 100%;
  height: 75px;
  padding: 0 !important;
  transition: 0.8s all;

  a {
    text-decoration: none !important;
    text-transform: uppercase;
  }
`;

const StyledNavbarToggler = styled(NavbarToggler)`
  border: none !important;

  :focus {
    outline: 0;
  }
`;

const StyledNavbarCollapse = styled(Collapse)`
  position: relative;
  top: 100px;
  margin: 0 25px;
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  transition: 0.8s all;

  @media (min-width: 768px) {
    position: unset;
    top: 0;
    margin: 0;
    background: transparent;
  }
`;

const AboutRouterLink = styled(RouterNavLink)`
  position: relative;
  top: -4px;
  left: 0px;
  display: block;

  @media (min-width: 768px) {
    top: 8px;
    left: -5px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

const StyleDropdownMenu = styled(DropdownMenu)`
  border: none !important;
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
  border-radius: 8px !important;
`;

const StyleDropdownItem = styled(DropdownItem)`
  a {
    color: #3d3d3d !important;
    text-decoration: none !important;
    text-transform: uppercase;
  }

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
      isOpen: false,
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
      $("#logo").attr("src", "/resources/logo_black.png");

      if (windowWidth >= 768) {
        $("#navbar-collapsed").css({
          background: "transparent",
          "box-shadow": "rgba(0,0,0,.12) 0 0 70px 6px;",
        });
        $(".dropdown-menu").css("background", "#fff");
        $(".top-level-nav-link")
          .removeClass("top-level-nav-link-white")
          .addClass("top-level-nav-link-black");
      } else {
        $(".navbar-dark .navbar-toggler-icon").css({
          "background-image": "url('/resources/bars-solid-black.svg')",
        });
      }
    } else {
      $("#navbar").removeClass("navbar-scroll");
      $("#logo").attr("src", "/resources/logo_white.png");

      if (windowWidth >= 768) {
        $("#navbar-collapsed").css({
          background: "transparent",
          "box-shadow": "none",
        });
        $(".dropdown-menu").css("background", "#fff");
        $(".top-level-nav-link")
          .removeClass("top-level-nav-link-black")
          .addClass("top-level-nav-link-white");
      } else {
        $(".navbar-dark .navbar-toggler-icon").css({
          "background-image": "url('/resources/bars-solid-white.svg')",
        });
      }
    }
  };

  toggle = () => {
    $("navbar-toggler").toggleClass("active");
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  clickedLink = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav>
        <StyledNavbar className="fixed-top" dark expand="md" id="navbar">
          <RouterNavLink to="/">
            <LogoImg src="/resources/logo_white.png" id="logo" />
          </RouterNavLink>
          <StyledNavbarToggler onClick={this.toggle} />
          <StyledNavbarCollapse
            isOpen={this.state.isOpen}
            navbar
            id="navbar-collapsed"
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AboutRouterLink
                  className={`top-level-nav-link ${
                    windowWidth >= 768
                      ? "top-level-nav-link-white"
                      : "top-level-nav-link-black"
                  }`}
                  to="/about"
                  onClick={() => this.clickedLink()}
                >
                  About
                </AboutRouterLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  className={`top-level-nav-link ${
                    windowWidth >= 768
                      ? "top-level-nav-link-white"
                      : "top-level-nav-link-black"
                  }`}
                  nav
                  caret
                >
                  BESAME COSMETICS
                </DropdownToggle>
                <StyleDropdownMenu right>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/besame/about"
                      onClick={() => this.clickedLink()}
                    >
                      ABOUT BESAME
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/besame/face"
                      onClick={() => this.clickedLink()}
                    >
                      FACE
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/besame/eyes"
                      onClick={() => this.clickedLink()}
                    >
                      EYES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/besame/lipstick"
                      onClick={() => this.clickedLink()}
                    >
                      LIPS
                    </RouterNavLink>
                  </StyleDropdownItem>
                </StyleDropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  className={`top-level-nav-link ${
                    windowWidth >= 768
                      ? "top-level-nav-link-white"
                      : "top-level-nav-link-black"
                  }`}
                  nav
                  caret
                >
                  SALON
                </DropdownToggle>
                <StyleDropdownMenu right>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/about"
                      onClick={() => this.clickedLink()}
                    >
                      ABOUT OUR SALON
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/eyes"
                      onClick={() => this.clickedLink()}
                    >
                      EYES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/finishing-touches"
                      onClick={() => this.clickedLink()}
                    >
                      FINISHING TOUCHES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/haircuts"
                      onClick={() => this.clickedLink()}
                    >
                      HAIRCUTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/hair-coloring"
                      onClick={() => this.clickedLink()}
                    >
                      HAIR COLORING
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/hair-extensions"
                      onClick={() => this.clickedLink()}
                    >
                      HAIR EXTENSIONS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/hair-highlights"
                      onClick={() => this.clickedLink()}
                    >
                      HAIR HIGHLIGHTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/hair-treatments"
                      onClick={() => this.clickedLink()}
                    >
                      HAIR TREATMENTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/locs"
                      onClick={() => this.clickedLink()}
                    >
                      LOCS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/makeup"
                      onClick={() => this.clickedLink()}
                    >
                      MAKEUP
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/mens-services"
                      onClick={() => this.clickedLink()}
                    >
                      MENS SERVICES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/natural-styling"
                      onClick={() => this.clickedLink()}
                    >
                      NATURAL STYLING
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/perms"
                      onClick={() => this.clickedLink()}
                    >
                      PERMS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/relaxer"
                      onClick={() => this.clickedLink()}
                    >
                      RELAXER
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/sets-twists"
                      onClick={() => this.clickedLink()}
                    >
                      SETS &amp; TWISTS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/specialty-extensions"
                      onClick={() => this.clickedLink()}
                    >
                      SPECIALTY w/ EXTENSIONS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/salon/straightening-services"
                      onClick={() => this.clickedLink()}
                    >
                      STRAIGHTENING SERVICES
                    </RouterNavLink>
                  </StyleDropdownItem>
                </StyleDropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  className={`top-level-nav-link ${
                    windowWidth >= 768
                      ? "top-level-nav-link-white"
                      : "top-level-nav-link-black"
                  }`}
                  nav
                  caret
                >
                  SERVICES
                </DropdownToggle>
                <StyleDropdownMenu right>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/about"
                      onClick={() => this.clickedLink()}
                    >
                      ABOUT MASSAGES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/addons"
                      onClick={() => this.clickedLink()}
                    >
                      ADD ON'S
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/breast-buttlift-fat-eliminator"
                      onClick={() => this.clickedLink()}
                    >
                      BREAST AND BUTT LIFT, AND FAT ELIMINATOR
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/deluxe-couples"
                      onClick={() => this.clickedLink()}
                    >
                      DELUXE/COUPLES MASSAGES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/facials"
                      onClick={() => this.clickedLink()}
                    >
                      FACIALS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/health-coaching"
                      onClick={() => this.clickedLink()}
                    >
                      HEALTH COACHING
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/infrared-sauna"
                      onClick={() => this.clickedLink()}
                    >
                      INFRARED SAUNA
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/kids-yoga"
                      onClick={() => this.clickedLink()}
                    >
                      KIDS YOGA
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/massages"
                      onClick={() => this.clickedLink()}
                    >
                      MASSAGES
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/oxygen-bar"
                      onClick={() => this.clickedLink()}
                    >
                      OXYGEN BAR
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/oxygen-foot-soak"
                      onClick={() => this.clickedLink()}
                    >
                      OXYGEN FOOT SOAK
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/scrubs-weightloss"
                      onClick={() => this.clickedLink()}
                    >
                      SCRUBS/WEIGHTLOSS
                    </RouterNavLink>
                  </StyleDropdownItem>
                  <StyleDropdownItem>
                    <RouterNavLink
                      className="link-item"
                      to="/services/waxes"
                      onClick={() => this.clickedLink()}
                    >
                      WAXES
                    </RouterNavLink>
                  </StyleDropdownItem>
                </StyleDropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  className={`top-level-nav-link ${
                    windowWidth >= 768
                      ? "top-level-nav-link-white"
                      : "top-level-nav-link-black"
                  }`}
                  href="#contact"
                  onClick={() => this.clickedLink()}
                >
                  CONTACT US
                </NavLink>
              </NavItem>
            </Nav>
          </StyledNavbarCollapse>
        </StyledNavbar>
      </nav>
    );
  }
}
