import styled from "styled-components";
export default function TextCont({ crew }) {
  return (
    <>
      <Container>
        <Title>{crew.role}</Title>
        <Name>{crew.name}</Name>
        <Bio>{crew.bio}</Bio>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 1440px) {
    align-items: left;
  }
  
  
`;
const Title = styled.h2`
  font-family: Bellefair;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #d0d6f9;
  @media screen and (max-width: 1440px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;
const Name = styled.h1`
  font-family: Bellefair;
  font-weight: 400;
  font-size: 56px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  @media screen and (max-width: 1440px) {
    font-size: 40px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;
const Bio = styled.p`
  margin-top: 17px;
  font-family: Barlow;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #d0d6f9;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
`;
