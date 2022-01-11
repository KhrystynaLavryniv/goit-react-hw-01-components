import transactions from "../../data/transactions.json";
import PropTypes from "prop-types";

import {
  TransactionSection,
  TransactionHeader,
  TransactionHeaderItem,
  Transaction,
  TransactionItem,
  TransactionData,
} from "./transactionHistory.style";

export default function TransactionHistory() {
  return (
    <TransactionSection>
      <thead>
        <TransactionHeader>
          <TransactionHeaderItem>Type</TransactionHeaderItem>
          <TransactionHeaderItem>Amount</TransactionHeaderItem>
          <TransactionHeaderItem>Currency</TransactionHeaderItem>
        </TransactionHeader>
      </thead>

      <Transaction>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id}>
            <TransactionData>{transaction.type}</TransactionData>
            <TransactionData>{transaction.amount}</TransactionData>
            <TransactionData>{transaction.currency}</TransactionData>
          </TransactionItem>
        ))}
      </Transaction>
    </TransactionSection>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
