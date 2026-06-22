import styled from "styled-components";
import SliderButtons from "../components/Technology/SliderButtons";
export default function Technology() {
  return (
    <>
      <Main>
          <Headline>
            <span>03</span>SPACE LAUNCH 101
          </Headline>
        <Container>
        <SliderButtons/>
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("technology.png");
  background-position: center;
  background-size: cover;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
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
    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1200px) {
    text-align: center;
    font-size: 24px;
  }
`;
