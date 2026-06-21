import styled from "styled-components";
export default function Pagination({onClick}) {
    
  return (
    <>
      <PaginationCont>
        <PaginationButton onClick={()=>onClick(0)}/>
        <PaginationButton onClick={()=>onClick(1)}/>
        <PaginationButton onClick={()=>onClick(2)}/>
        <PaginationButton onClick={()=>onClick(3)}/>

        
      </PaginationCont>
    </>
  );
}

const PaginationCont = styled.div`
display:flex;
gap:24px;
align-items:center;
`;
const PaginationButton=styled.button`
width:15px;
height:15px;
background-color:#fff;
opacity:0.17;
border-radius:50%;
&:hover{
  opacity:0.5;
}
&.active{
  opacity:1;
}
`;
