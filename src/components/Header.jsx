import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <HeaderDiv>
      <LogoDiv>
        <LogoImg
          src="/moon-vector-illustration_943194-7342-removebg-preview.png"
          alt="logo"
        />
      </LogoDiv>
      <LineNav>
        <Line />
        <Nav>
          <NavItem active={location.pathname === "/"}>
            <Link to="/">
              <Navh2>00</Navh2>
              <Navh2>home</Navh2>
            </Link>
          </NavItem>
          <NavItem active={location.pathname === "/destination"}>
            <Link to="/destination">
              <Navh2>01</Navh2>
              <Navh2>DESTINATION</Navh2>
            </Link>
          </NavItem>
          <NavItem active={location.pathname === "/crew"}>
            <Link to="/crew">
              <Navh2>02</Navh2>
              <Navh2>crew</Navh2>
            </Link>
          </NavItem>
          <NavItem active={location.pathname === "/technology"}>
            <Link to="/technology">
              <Navh2>03</Navh2>
              <Navh2>TECHNOLOGY</Navh2>
            </Link>
          </NavItem>
        </Nav>
      </LineNav>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.header`
  width: 100%;
  height: 96px;
  margin-top: 40px;
  padding-left: 55px;
  display: flex;
  align-items: center;
  gap: 60px;
`;

const LogoDiv = styled.div`
  min-width: 48px !important;
  height: 48px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LineNav = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.span`
  width: 473px;
  height: 1px;
  opacity: 0.25;
  background-color: #fff;
  position: relative;
  left: 40px;
  z-index: 999;
`;

const Nav = styled.nav`
  width: 830px;
  padding: 39px 123px;
  display: flex;
  align-items: center;
  gap: 48px;
  backdrop-filter: blur(81.55px);
`;

const NavItem = styled.div`
  height: 96px;
  a {
    display: flex;
    align-items: center;
    gap: 11px;
    text-decoration: none;
    color: #fff;
    height: 100%;
    border-bottom: ${(props) => (props.active ? "2px solid #fff" : "none")};
  }
`;

const Navh2 = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2.7px;
  color: #fff;
`;
