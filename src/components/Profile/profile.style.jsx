import styled from "styled-components";

export const ProfileSection = styled.div`
  padding: 50px;
  width: 320px;
  margin: 0 auto;
  background-color: #e2e0e0;
`;

export const ProfileCard = styled.div`
  padding: 50px 50px 10px 50px;
  margin: 0 auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export const UserImg = styled.img`
  display: block;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto 30px auto;
`;
export const UserName = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
export const UserInfo = styled.p`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #868282;
`;

export const UserStats = styled.ul`
  list-style: none;
  padding: 20px 50px 20px 50px;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #b4bcf3;
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserStatsName = styled.span`
  font-size: 14px;
  text-align: center;
  color: #868282;
`;
export const UserStatsQuantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fffff;
  margin-top: 5px;
`;
