import styled, { keyframes } from "styled-components";
import { crewdata } from "../data/crewdata";
import Pagination from "../components/crew/Pagination";
import TextCont from "../components/crew/TextCont";
import { useState } from "react";

export default function Crew() {
  const [curent, setCurent] = useState(0);

  return (
    <Main>
      <Headline>
        <span>02</span>MEET YOUR CREW
      </Headline>

      <MobailImg src={crewdata[curent].image} />

      <TextPag key={curent}>
        <PagCont1>
          <Pagination onClick={setCurent} current={curent} />
        </PagCont1>
        <TextCont crew={crewdata[curent]} />
        <PagCont>
          <Pagination onClick={setCurent} current={curent} />
        </PagCont>
      </TextPag>

      <ImgCon >
        <Img src={crewdata[curent].image} />
      </ImgCon>
    </Main>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Main = styled.main`
  padding-top: 200px;
  padding-inline: 165px;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/crewbg.png");
  background-position: center;
  background-size: cover;
  position: relative;

  @media (max-width: 1385px) {
    padding-top: 136px;
    padding-inline: 100px;
    height: auto;
  }
  @media (max-width: 1000px) and (orientation: landscape) {
    min-height: 100vh;
    padding-bottom: 40px;
  }
  @media (max-width: 600px) {
    padding-inline: 32px;
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
    color: rgba(255,255,255,0.25);
    margin-right: 28px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 1000px) and (orientation: landscape) {
    font-size: 20px;
  }
`;

const TextPag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 614px;
  height: 400px;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 1344px) {
    width: 458px !important;
    gap: 40px;
    align-items: center;
    text-align: center;
    margin: auto;
  }
  @media (max-width: 1344px) and (orientation: landscape) {
    flex-direction: column;
    gap: 100px;
    width: 614px;
    height: 400px;
    align-items: flex-start;
    margin: 0;
  }
  @media (max-width: 910px) and (orientation: landscape) {
    gap: 40px;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: auto;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 100% !important;
    height: auto;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 60%;
  object-fit: cover;

  @media (max-width: 1344px) {
    left: 50%;
    transform: translateX(-50%);
    max-height: 532px;
  }
  @media (max-width: 1344px) and (orientation: landscape) {
    left: 100%;
    transform: translateX(-100%);
    max-width: 370px;
    min-height: 458px;
  }
  @media (max-width: 910px) and (orientation: portrait),
         (max-width: 910px) and (orientation: landscape) {
    width: 327px;
  }
`;

const ImgCon = styled.div`
  @media (max-width: 910px) {
    display: none;
  }
`;

const MobailImg = styled.img`
  display: none;
  @media (max-width: 910px) {
    display: flex;
    width: 100%;
    height: 223px;
    object-fit: contain;
    margin: auto;
    margin-bottom: 32px;
    border-bottom: 1.5px solid #383b4b;
  }
`;

const PagCont = styled.div`
  @media (max-width: 910px) {
    display: none;
  }
`;

const PagCont1 = styled.div`
  display: none;
  @media (max-width: 910px) {
    display: flex;
  }
`;
