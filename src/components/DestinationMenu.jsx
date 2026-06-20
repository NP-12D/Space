import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DestinationMenu({ current }) {
  const planets = ["moon", "mars", "europa", "titan"];

  return (
    <Nav>
      {planets.map((p) => (
        <PlanetLink
          key={p}
          to={`/destination/${p}`}
          className={current === p ? "active" : ""}
        >
          {p}
        </PlanetLink>
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 36px;
  margin-top: 40px;
`;

const PlanetLink = styled(Link)`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 12px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;

  &.active {
    border-color: #fff;
    color: #fff;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    color: #fff;
  }
`;
