import styled from "styled-components";

export default function PlanetText({ planet }) {
  return (
    <Details>
      <Title>{planet.name}</Title>
      <Description>{planet.description}</Description>
      <Divider />
      <Stats>
        <StatItem>
          <StatTitle>Avg. Distance</StatTitle>
          <StatValue>{planet.distance}</StatValue>
        </StatItem>
        <StatItem>
          <StatTitle>Est. Travel Time</StatTitle>
          <StatValue>{planet.travel}</StatValue>
        </StatItem>
      </Stats>
    </Details>
  );
}

const Details = styled.div`
  flex: 1;
  max-width: 445px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1344px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    max-width:80%;
    margin:auto;
  }
`;

const Title = styled.h2`
  font-family: Bellefair;
  font-weight: 400;
  font-size: 100px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #fff;
   @media screen and (max-width: 600px) {
    font-size:56px;
  }
`;

const Description = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  color: #d0d6f9;
  line-height: 1.8;
  margin-bottom: 54px;
   @media screen and (max-width: 600px) {
    font-size:15px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #383b4b;
  margin-bottom: 28px;
`;

const Stats = styled.div`
  display: flex;
  gap: 80px;
  width: 100%;
  @media (max-width: 1344px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }
   @media screen and (max-width: 600px) {
   flex-direction:column;
   gap:32px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatTitle = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  letter-spacing: 2.35px;
  color: #d0d6f9;
  text-transform: uppercase;
`;

const StatValue = styled.span`
  font-family: "Bellefair", serif;
  font-size: 28px;
  color: #fff;
  text-transform: uppercase;
`;
