import styled from "styled-components";

export const TransactionSection = styled.table`
  width: 420px;
  margin: 0 auto;
`;

export const TransactionHeader = styled.tr`
  padding: 25px 15px;
`;
export const TransactionHeaderItem = styled.th`
  padding: 10px;
  background-color: #8cf1fc;
  text-transform: uppercase;
  color: #ffffff;
`;
export const Transaction = styled.tbody``;
export const TransactionItem = styled.tr`
  color: #868282;
  :nth-child(even) {
    background-color: #e4dfd7;
  }
`;
export const TransactionData = styled.td`
padding:5px;
text-align:center;
:first-letter{
  text-transform: uppercase;
 
`;
