import styled from "styled-components";

export const Wrap = styled.div`
margin: 0 auto;
width: 600px;
border-radius: 10px;
background-color: #fff;
box-shadow: 5px 6px 13px 5px #c6cccced;
`;
export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 0;
`;
export const Avatar = styled.img`
width: 300px;
background-color:  #e7eeeeed;
border-radius: 50%;
`;
export const Name = styled.p`
font-weight: 700;
font-size: 40px;
margin-top: 20px;
color: gray;
`;
export const Tag = styled.p`
font-weight: 500;
font-size: 30px;
color: gray;
margin-top: 15px;
`;
export const Location = styled.p`
font-weight: 700;
font-size: 30px;
color: gray;
margin-top: 15px;
`;
export const Stats = styled.ul`
display: flex;
width: 100%;
margin: 0;
padding: 0;
  justify-content: space-between;
`;
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
border-right: solid 2px white;
padding: 30px 0;
background-color: #f0f0f0;
:last-child{ border-right: none;}
`;
export const Label = styled.span`
font-weight: 700;
font-size: 30px;
color: gray;
margin-top: 15px;
`;
export const Quantity = styled.span`
font-weight: 800;
font-size: 50px;
`