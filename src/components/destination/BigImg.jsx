import styled from "styled-components";

export default function BigImg({ planet }) {
  return (
    <PlanetView>
      <PlanetImg src={planet.image} alt={planet.name} />
    </PlanetView>
  );
}

const PlanetView = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const PlanetImg = styled.img`
  width: 440px;
  height: 440px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 60px rgba(255, 255, 255, 0.1);
  animation: orbitSpin 160s linear infinite;
  overflow:hidden;

  @keyframes orbitSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
