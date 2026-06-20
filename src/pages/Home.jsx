import styled from "styled-components";
import { Link } from "react-router-dom";
import homebackground from "../assets/Bitmap.jpg";

export default function Home() {
  return (
    <>
      <Main>
        <HeroContent>
          <TextSection>
            <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
            <MainTitle>SPACE</MainTitle>
            <Paragraph>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </Paragraph>
          </TextSection>

          <ButtonSection>
            <ExploreButton to="/destination">EXPLORE</ExploreButton>
          </ButtonSection>
        </HeroContent>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${homebackground});
  background-position: center;
  background-size: cover;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0px 165px;
  z-index: 5;
  animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  position:absolute;
  bottom:131px;
  left:0;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TextSection = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Subtitle = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.72px;
  color: #d0d6f9;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 24px;
`;

const MainTitle = styled.h1`
  font-family: "Bellefair", serif;
  font-size: 150px;
  color: #ffffff;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  color: #d0d6f9;
  line-height: 1.8;
  font-weight: 400;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExploreButton = styled(Link)`
  position: relative;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  border: none;
  background-color: #ffffff;
  color: #0b0d17;
  font-family: "Bellefair", serif;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  z-index: 10;
  transition: transform 0.2s ease;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1);
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1.65);
  }

  &:active {
    transform: scale(0.98);
  }
`;
