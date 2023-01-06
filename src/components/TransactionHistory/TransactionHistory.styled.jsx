import styled from "styled-components";

export const Table = styled.table`
margin: 20px auto 0 auto;
width: 600px;
background-color: #fff;
box-shadow: 5px 6px 13px 5px #c6cccced;
`;
export const Thead = styled.tr`
background-color: blue;
align-items: center;
color: white;


th{
    width: calc(100% / 3);
    padding: 20px;
}

`;
export const Tbody = styled.tr`
heigth: 50px;
text-align: center;
align-items: center;
&:nth-child(2n){
  background-color: gray;  
}
td{
    padding: 20px;

}
`