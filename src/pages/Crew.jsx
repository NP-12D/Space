import styled from "styled-components";
import { crewdata } from "../components/crewdata";
import Pagination from "../components/crew/Pagination";
import TextCont from "../components/crew/TextCont";
import { useState } from "react";
export default function Crew() {
  const [curent, setCurent] = useState(0);
  return (
    <>
      <Main>
        <Headline>
          <span>02</span>MEET YOUR CREW
        </Headline>
        <MobailImg src={crewdata[curent].image}></MobailImg>
        <TextPag>
          <PagCont1>
            <Pagination onClick={setCurent} />
          </PagCont1>
          <TextCont crew={crewdata[curent]} />
          <PagCont>
            <Pagination onClick={setCurent} />
          </PagCont>
        </TextPag>
        <ImgCon>
          <Img src={crewdata[curent].image}></Img>
        </ImgCon>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding-top: 200px;
  padding-inline: 165px;
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/crewbg.png");
  background-position: center;
  background-size: cover;
  position: relative;
  @media screen and (max-width: 1385px) {
    padding-top: 136px;
    padding-inline: 100px;
  }
  @media screen and (max-width: 600px) {
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
    color: rgba(255, 255, 255, 0.25);
    margin-right: 28px;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 16px;
  }
`;
const TextPag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 614px;
  height: 400px;
  @media screen and (max-width: 1344px) {
    width: 458px;
    gap: 40px;
    align-items: center;
    max-height: 232px;
    text-align: center;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Img = styled.img`
  position: absolute;
  bottom: 0px;
  left: 60%;

  object-fit: cover;
  @media screen and (max-width: 1344px) {
    left: 50%;
    transform: translateX(-50%);
    max-height: 532px;
  }
  @media screen and (max-width: 780px) {
    width: 327px;
  }
`;
const ImgCon = styled.div`
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
const MobailImg = styled.img`
  display: none;
  @media screen and (max-width: 780px) {
    display: flex;
    width: 327px;
    height: 223px;
    object-fit: contain;
    margin: auto;
    margin-bottom: 32px;
    border-bottom: 1.5px solid #383b4b;
  }
`;
const PagCont = styled.div`
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
const PagCont1 = styled.div`
  display: none;
  @media screen and (max-width: 780px) {
    display: flex;
  }
`;
