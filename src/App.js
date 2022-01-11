import React from "react";
import Profile from "./components/Profile/profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics/statistics";
import data from "./data/data.json";
import FriendList from "./components/FriendList/friendList";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./data/transactions.json";

export function App(props) {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>
  );
}
