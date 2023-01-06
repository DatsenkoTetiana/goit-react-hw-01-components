import styled from "styled-components";
import getRandomHexColor from '../RandomHexColor/RandomHexColor.jsx';

export const Wrapper = styled.section`
margin: 0 auto;
width: 600px;
background-color: #fff;
box-shadow: 5px 6px 13px 5px #c6cccced;
`;
export const Title = styled.h2`
font-weight: 700;
font-size: 40px;
  text-align: center;
  text-transform: uppercase;
padding: 70px 0;
color: gray;
`;
export const StatList = styled.ul`
display: flex;
width: 100%;
margin: 0;
padding: 0;
  justify-content: space-between;
`;
export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
border-right: solid 2px white;
padding: 30px 0;
background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
font-weight: 700;
font-size: 30px;
color: gray;
margin-top: 15px;
`;
export const Percentage = styled.span`
font-weight: 800;
font-size: 50px;
`;