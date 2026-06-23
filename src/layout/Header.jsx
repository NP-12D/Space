import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    document.body.style.overflow = burger ? "hidden" : "auto";
  }, [burger]);

  return (
    <HeaderDiv>
      <LogoDiv to="/">
        <LogoImg
          src="/simple-minimalist-galaxy-space-planet-logo-design-vector-removebg-preview.png"
          alt="logo"
        />
      </LogoDiv>

      <LineNav>
        <Line />

        <Nav className={burger ? "open" : ""}>
          <NavItem
            active={location.pathname === "/"}
            onClick={() => setBurger(false)}
          >
            <Link to="/">
              <Navh2>00</Navh2>
              <Navh2>home</Navh2>
            </Link>
          </NavItem>
          <NavItem
            active={location.pathname === "/destination"}
            onClick={() => setBurger(false)}
          >
            <Link to="/destination">
              <Navh2>01</Navh2>
              <Navh2>DESTINATION</Navh2>
            </Link>
          </NavItem>
          <NavItem
            active={location.pathname === "/crew"}
            onClick={() => setBurger(false)}
          >
            <Link to="/crew">
              <Navh2>02</Navh2>
              <Navh2>crew</Navh2>
            </Link>
          </NavItem>
          <NavItem
            $active={location.pathname === "/technology"}
            onClick={() => setBurger(false)}
          >
            <Link to="/technology">
              <Navh2>03</Navh2>
              <Navh2>TECHNOLOGY</Navh2>
            </Link>
          </NavItem>
        </Nav>
      </LineNav>
      <BurgerTrigger
        className={burger ? "open" : ""}
        onClick={() => setBurger(!burger)}
      >
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerTrigger>

      <DrawerOverlay
        className={burger ? "active" : ""}
        onClick={() => setBurger(false)}
      />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.header`
  width: 100%;
  height: 96px;
  position: absolute;
  top: 40px;
  padding-left: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  z-index: 999;
  @media screen and (max-width: 1385px) {
    top: 0px;
  }
`;

const LogoDiv = styled(Link)`
  width: 100px !important;
  height: 100px;
  @media screen and (max-width: 1300px) {
    width: 80px !important;
    height: 80px;
  }
  @media screen and (max-width: 780px) {
    width: 60px !important;
    height: 60px;
  }
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
  @media screen and (max-width: 1385px) {
    display: none;
  }
  @media screen and (max-width: 1420px) {
    width: 433px;
  }
`;

const Nav = styled.nav`
  width: 830px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  backdrop-filter: blur(81.55px);
  @media screen and (max-width: 1385px) {
    width: auto;
    padding-inline: 48px;
    gap: 32px;
  }
  @media screen and (max-width: 780px) {
    display: none;
    position: fixed;
    top: 0;
    right: -254px;
    width: 254px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(80px);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    padding: 118px 0 0 32px;
    z-index: 140;
    transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    gap: 32px;
    &.open {
      right: 0;
    }

    @media screen and (max-width: 780px) {
      display: flex;
      justify-content: flex-start;
    }
  }
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

  @media screen and (max-width: 1385px) {
    h2:first-of-type {
      display: none;
    }
  }
  @media screen and (max-width: 780px) {
    font-size: 16px;
    letter-spacing: 2.7px;
    color: #fff;
    text-transform: uppercase;
    background: none;
    border: none;

    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    padding-block: 6px;
    position: relative;
    height: 31px;
    h2:first-of-type {
      display: flex;
    }
    a {
      border-bottom: none;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 0;
      background-color: #fff;
      transition: width 0.3s ease;
    }

    ${(props) =>
      props.active &&
      `
    &::after {
      width: 4px;
    }
  `}
  }
`;

const Navh2 = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2.7px;
  color: #fff;
  @media screen and (max-width: 1385px) {
    letter-spacing: 2.3px;
  }
`;
const BurgerTrigger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 150;
  margin-right: 24px;

  &.open div:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
    background-color: #fff;
  }
  &.open div:nth-child(2) {
    opacity: 0;
    transform: scale(0);
  }
  &.open div:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
    background-color: #fff;
  }

  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

const BurgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #d0d6f9;
  transition:
    transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.3s ease,
    background-color 0.3s ease;
`;

const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 130;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;
