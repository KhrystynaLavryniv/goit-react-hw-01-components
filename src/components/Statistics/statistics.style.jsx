import styled from "styled-components";

export const StatisticsSection = styled.section`
  margin: 10px auto 0 auto;
  padding: 30px 50px;
  width: 320px;
  background-color: #e2e0e0;
`;

export const StatisticsTitle = styled.h1`
  text-transform: uppercase;
  font-size: 16px;
  margin: 0;
  padding: 20px 50px;
  text-align: center;
  text-transform: uppercase;
  color: #868282;
  background-color: #ffffff;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4);
  padding: 12px 0;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
export const StatsName = styled.span`
  font-size: 12px;
  text-align: center;
  color: #ffffff;
`;
export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-top: 5px;
`;
