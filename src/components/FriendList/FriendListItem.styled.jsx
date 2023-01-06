import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  heigth: 100px;
  background-color: #fff;
  box-shadow: 5px 6px 13px 5px #c6cccced;
  padding-left: 20px;
  margin-top: 20px;
`;
export const Status = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  margin: 20px;
  border: solid 1px grey;
  width: 100px;
  border-radius: 10px;
  margin-left: 20px;
`;
export const Name = styled.p`
  margin-left: 20px;
  font-weight: 700;
  font-size: 30px;
`;
