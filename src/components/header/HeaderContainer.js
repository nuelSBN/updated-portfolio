import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";
import {
  Header,
  Logo,
  Nav,
  Box,
  Navbar,
  Social,
  NavItem,
  SocialIcon,
  NavLink,
} from "./header.styles";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll, Link } from "react-scroll";

export default function HeaderContainer({ stuff }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Header>
      <Nav>
        <Box>
          <Link onClick={scrollToTop}>
            <Logo src={stuff === "dark" ? logo : logoDark} />
          </Link>
        </Box>
        <Box onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</Box>
        <Navbar onClick={handleClick} click={click}>
          <NavItem>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setClick(false)}
            >
              1. about
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setClick(false)}
            >
              2. project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="technologies"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setClick(false)}
            >
              3. technologies
            </NavLink>
          </NavItem>
          <Social>
            <SocialIcon>
              <a
                href="https://github.com/nuelSBN"
                rel="noreferrer"
                target={"_blank"}
              >
                github
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="mailto:echinedu007@gmail.com"
                rel="noreferrer"
                target={"_blank"}
              >
                gmail
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://wa.me/2348130927634"
                rel="noreferrer"
                target={"_blank"}
              >
                whatsapp
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="tel:+234-813-092-7634"
                rel="noreferrer"
                target={"_blank"}
              >
                phone
              </a>
            </SocialIcon>
          </Social>
        </Navbar>
      </Nav>
    </Header>
  );
}
