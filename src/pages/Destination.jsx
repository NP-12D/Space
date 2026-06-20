import { useParams } from "react-router-dom";
import styled from "styled-components";
import DestinationMenu from "../components/DestinationMenu";

export default function Destination() {
  const { planetName } = useParams();
  console.log(planetName);

  return (
    <Container>
      <Headline>
        <span>01</span> Pick your destination
      </Headline>
      <Layout></Layout>
      <DestinationMenu current={planetName} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px 80px 24px;
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
`;
