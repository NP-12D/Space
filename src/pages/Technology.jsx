import styled, { keyframes } from "styled-components";
import SliderButtons from "../components/Technology/SliderButtons";
import TextCont from "../components/crew/TextCont";
import { technologydata } from "../data/technlogydata";
import { useState } from "react";

export default function Technology() {
  const [current, setCurrent] = useState(0);

  return (
    <Main>
      <Headline>
        <span>03</span>SPACE LAUNCH 101
      </Headline>

      <Container>
        <Div>
          <SliderButtons onClick={setCurrent} current={current} />
          <TextWrapper key={current}>
            <TextCont crew={technologydata[current]} />
          </TextWrapper>
        </Div>
        <ImgPortrait
         
          src={technologydata[current].images.portrait}
          alt="technology portrait"
        />
      </Container>

      <Container2>
        <ImgLandscape
          
          src={technologydata[current].images.landscape}
          alt="technology landscape"
        />
        <SliderButtons onClick={setCurrent} current={current} />
        <TextWrapper key={current}>
          <TextCont crew={technologydata[current]} />
        </TextWrapper>
      </Container2>
    </Main>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;



const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("technology.png");
  background-position: center;
  background-size: cover;
  padding-top: 200px;
  padding-left: 165px;
  padding-bottom: 50px;

  @media screen and (max-width: 1344px) {
    padding-left: 0px;
    padding-top: 136px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1344px) {
    display: none;
  }
`;

const Container2 = styled.div`
  display: none;
  align-items: center;
  gap: 60px;
  flex-direction: column;

  @media screen and (max-width: 1344px) {
    display: flex;
    text-align: center;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
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

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1344px) {
    margin-left: 38px;
  }
`;

const ImgPortrait = styled.img`
  width: 515px;
  height: 527px;
  object-fit: cover;
  animation: ${fadeIn} 0.6s ease;

  @media screen and (max-width: 1344px) {
    display: none;
  }
`;

const ImgLandscape = styled.img`
  width: 100%;
  height: 410px;
  object-fit: cover;
  animation: ${fadeIn} 0.6s ease;

  @media screen and (min-width: 1345px) {
    display: none;
    
  }

  @media screen and (max-width: 850px) {
    height: 310px;
  }
`;

const TextWrapper = styled.div`
  max-width: 500px;
  animation: ${fadeIn} 0.6s ease;

  @media screen and (max-width: 600px) {
    max-width: 90%;
  }
`;
