import styled from "styled-components";
export default function Pagination({ onClick ,current }) {
  return (
    <>
      <PaginationCont>
        {[0, 1, 2, 3].map((num) => (
          <PaginationButton onClick={() => onClick(num)}  className={current===num? "active":""}/>
        ))}
      </PaginationCont>
    </>
  );
}

const PaginationCont = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  z-index:9999;
`;
const PaginationButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: #fff;
  opacity: 0.17;
  border-radius: 50%;
  &:hover {
    opacity: 0.5;
  }
  &.active {
    opacity: 1;
  }
`;
