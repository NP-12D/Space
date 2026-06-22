import styled from "styled-components";
export default function SliderButtons({ onClick, current }) {
  return (
    <>
      <Btns>
        {[1, 2, 3].map((num) => (
          <Btn
            key={num}
            onClick={() => onClick}
            className={num === current ? "active" : ""}
          >
            {num}
          </Btn>
        ))}
      </Btns>
    </>
  );
}
const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Btn = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Bellefair;
  background-color: transparent;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 2px;
  text-align: center;
  color: #fff;
  border: 1px solid rgba(250, 250, 250, 0.25);
  border-radius:50%;

  &.active {
    color: #0b0d17;
    background-color: #fff;
  }
`;
