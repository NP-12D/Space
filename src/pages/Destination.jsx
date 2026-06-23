import { useParams } from "react-router-dom";
import styled from "styled-components";
import DestinationMenu from "../components/destination/DestinationMenu";
import BigImg from "../components/destination/BigImg";
import { planetsdata } from "../data/planetsdata";
import PlanetText from "../components/destination/PlanetText";
export default function Destination() {
  const { planetName } = useParams();
  console.log(planetName);
  const planet = planetsdata.find((p) => p.id === planetName) || planetsdata[0];

  return (
    <Container>
      <Headline>
        <span>01</span> Pick your destination
      </Headline>

      <Layout>
        <BigImg planet={planet} />
        <div>
          <DestinationMenu current={planetName} />
          <PlanetText planet={planet} />
        </div>
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 50px;
  padding-inline: 160px;
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  /* position: absolute;
  bottom: 112px; */
  background-image: url("/destination.jpg");
  background-position: center;
  background-size: cover;
 
  @media screen and (max-width: 1344px) {
    padding-inline:80px;
     overflow:hidden;
     padding-top: 135px;
  }
   @media screen and (max-width: 780px) {
    padding-inline:32px;
    overflow:hidden;
  }
`;

const Headline = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.72px;
  text-transform: uppercase;
  font-weight: 400;
  color: #fff;
  margin-bottom: 60px;

   span {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.25);
    margin-right: 28px;
    @media screen and (max-width: 1344px) {
      font-size: 24px;
      
    }
    @media screen and (max-width: 780px) {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 780px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
    font-size: 24px;
  }
  @media screen and (max-width: 1344px) {
    font-size: 24px;
    
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  @media (max-width: 1344px) {
    
    gap: 50px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 50px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
  }
`;
