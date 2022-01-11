import styled from "styled-components";

export const Friend = styled.ul`
  margin: 10px auto 0 auto;
  width: 320px;
`;

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 5px 15px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
`;

export const FriendStatus = styled.span`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? `green` : `red`)};
`;
export const FriendName = styled.p`
  font-weight: bold;
  text-align: center;
  color: #000000;
`;
export const FriendImg = styled.img`
  display: block;
  border-radius: 4px;
  border: 1px solid #dfdcdc;

  margin: 0 15px;
`;
