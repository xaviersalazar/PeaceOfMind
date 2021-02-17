import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { setIsOpen } from "../../redux/actions/navigationActions";
import styled, { keyframes } from "styled-components";

const windowWidth = $(window).width();

const scrollDownAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }

  40% {
    opacity: 1;
  }

  80% {
    opacity: 0;
    transform: translate(0, 8px);
  }

  100% {
    opacity: 0;
  }
`;

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
  max-height: 250px;
  overflow-y: scroll;

  @media (min-width: 768px) {
    max-height: initial;
    overflow: hidden;
  }
`;

const StyleDropdownItem = styled(DropdownItem)`
  a {
    color: #3d3d3d !important;
    text-decoration: none !important;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  & {
    :hover {
      background: linear-gradient(-45deg, #b3ffab, #12fff7);
    }
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ScrollDown = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 30px;
  width: 20px;

  &::before {
    animation: ${scrollDownAnimation} 2s infinite;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    content: "";
    height: 6px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 10px;
    width: 6px;
  }
`;

const ScrollText = styled.p`
  font-size: 0.5rem;
  text-align: center;
  margin: 8px 0 0 0;
  position: relative;
  top: 100%;
  right: 2px;
  color: rgba(0, 0, 0, 0.75);
`;

export const Navigation = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navigation.isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    $("#salon-menu").on("scroll", () => {
      $("#salon-menu .scroll-down").fadeOut(1500);
    });

    $("#services-menu").on("scroll", () => {
      $("#services-menu .scroll-down").fadeOut(1500);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
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

  const toggle = () => {
    $("navbar-toggler").toggleClass("active");

    dispatch(setIsOpen(!isOpen));
  };

  const clickedLink = () => {
    dispatch(setIsOpen(!isOpen));
  };

  return (
    <nav>
      <StyledNavbar className="fixed-top" dark expand="md" id="navbar">
        <RouterNavLink to="/">
          <LogoImg src="/resources/logo_white.png" id="logo" />
        </RouterNavLink>
        <StyledNavbarToggler onClick={toggle} />
        <StyledNavbarCollapse isOpen={isOpen} navbar id="navbar-collapsed">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AboutRouterLink
                className={`top-level-nav-link ${
                  windowWidth >= 768
                    ? "top-level-nav-link-white"
                    : "top-level-nav-link-black"
                }`}
                to="/about"
                onClick={clickedLink}
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
                    onClick={clickedLink}
                  >
                    ABOUT BESAME
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/besame/face"
                    onClick={clickedLink}
                  >
                    FACE
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/besame/eyes"
                    onClick={clickedLink}
                  >
                    EYES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/besame/lipstick"
                    onClick={clickedLink}
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
              <StyleDropdownMenu right id="salon-menu">
                {windowWidth < 768 && (
                  <ScrollDown className="scroll-down">
                    <ScrollText>scroll</ScrollText>
                  </ScrollDown>
                )}
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/about"
                    onClick={clickedLink}
                  >
                    ABOUT OUR SALON
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/eyes"
                    onClick={clickedLink}
                  >
                    EYES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/finishing-touches"
                    onClick={clickedLink}
                  >
                    FINISHING TOUCHES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/haircuts"
                    onClick={clickedLink}
                  >
                    HAIRCUTS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/hair-coloring"
                    onClick={clickedLink}
                  >
                    HAIR COLORING
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/hair-extensions"
                    onClick={clickedLink}
                  >
                    HAIR EXTENSIONS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/hair-highlights"
                    onClick={clickedLink}
                  >
                    HAIR HIGHLIGHTS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/hair-treatments"
                    onClick={clickedLink}
                  >
                    HAIR TREATMENTS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/locs"
                    onClick={clickedLink}
                  >
                    LOCS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/makeup"
                    onClick={clickedLink}
                  >
                    MAKEUP
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/mens-services"
                    onClick={clickedLink}
                  >
                    MENS SERVICES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/natural-styling"
                    onClick={clickedLink}
                  >
                    NATURAL STYLING
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/perms"
                    onClick={clickedLink}
                  >
                    PERMS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/relaxer"
                    onClick={clickedLink}
                  >
                    RELAXER
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/sets-twists"
                    onClick={clickedLink}
                  >
                    SETS &amp; TWISTS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/specialty-extensions"
                    onClick={clickedLink}
                  >
                    SPECIALTY w/ EXTENSIONS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/salon/straightening-services"
                    onClick={clickedLink}
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
              <StyleDropdownMenu right id="services-menu">
                {windowWidth < 768 && (
                  <ScrollDown className="scroll-down">
                    <ScrollText>scroll</ScrollText>
                  </ScrollDown>
                )}
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/about"
                    onClick={clickedLink}
                  >
                    ABOUT MASSAGES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/addons"
                    onClick={clickedLink}
                  >
                    ADD ON'S
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/breast-buttlift-fat-eliminator"
                    onClick={clickedLink}
                  >
                    BREAST/BUTT LIFT & FAT ELIM
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/deluxe-couples"
                    onClick={clickedLink}
                  >
                    DELUXE/COUPLES MASSAGES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/facials"
                    onClick={clickedLink}
                  >
                    FACIALS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/facial-enhancements"
                    onClick={clickedLink}
                  >
                    FACIAL ENHANCEMENTS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/health-coaching"
                    onClick={clickedLink}
                  >
                    HEALTH COACHING
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/infrared-sauna"
                    onClick={clickedLink}
                  >
                    INFRARED SAUNA
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/kids-yoga"
                    onClick={clickedLink}
                  >
                    KIDS YOGA
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/massages"
                    onClick={clickedLink}
                  >
                    MASSAGES
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/oxygen-bar"
                    onClick={clickedLink}
                  >
                    OXYGEN BAR
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/oxygen-foot-soak"
                    onClick={clickedLink}
                  >
                    OXYGEN FOOT SOAK
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/scrubs-weightloss"
                    onClick={clickedLink}
                  >
                    SCRUBS/WEIGHTLOSS
                  </RouterNavLink>
                </StyleDropdownItem>
                <StyleDropdownItem>
                  <RouterNavLink
                    className="link-item"
                    to="/services/waxes"
                    onClick={clickedLink}
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
                onClick={clickedLink}
              >
                CONTACT US
              </NavLink>
            </NavItem>
          </Nav>
        </StyledNavbarCollapse>
      </StyledNavbar>
    </nav>
  );
};
