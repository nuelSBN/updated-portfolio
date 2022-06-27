import styled from "styled-components";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-scroll";

export const Header = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.body};
  border-bottom: 4px solid;
  z-index: 9;

  @media (min-width: 600px) {
    height: 80px;
  }

  @media (min-width: 992px) {
    height: 100px;
  }
`;

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  padding: 0 4vmin;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 5vmin;
`;

export const Logo = styled.img`
  width: 35vmin;
`;

export const Navbar = styled.ul`
  list-style: none;
  height: 100vh;
  width: 100%;
  position: absolute;
  padding: 0 4vmin;
  top: 70px;
  right: ${({ click }) => (click ? 0 : "-200%")};
  transition: all ease-in-out 0.5s;
  background-color: ${(props) => props.theme.body};
  z-index: 9;

  @media (min-width: 600px) {
    top: 80px;
  }

  @media (min-width: 992px) {
    transition: all ease-in-out 0.9s;
    top: 100px;
  }
`;

export const NavItem = styled.li`
  font-size: 6vmin;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  text-transform: capitalize;
  font-weight: 100;
  font-family: "Smooch", cursive;
  cursor: pointer;
`;

export const Social = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 1vmin;
  display: flex;
  justify-content: center;
  gap: 0.9vmin;
`;

export const SocialIcon = styled.li`
  font-size: 4vmin;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
`;

export const Toggler = styled(FaRegLightbulb)`
  position: fixed;
  font-size: 30px;
  right: 5vmin;
  bottom: 5vmin;
  color: gold;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  font-family: "Smooch", cursive;
`;
