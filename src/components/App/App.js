import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../data/user.json';
import Statistics from '../Statistics/Statistics';
import statsJSON from '../../data/statistics.json';
import Friendlist from '../FriendList/FriendList';
import friendsJSON from '../../data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactionsJSON from '../../data/transactions.json'
const {
  name,
  tag,
  avatar,
  location,
  stats: { likes, views, followers },
} = user;

export default function App() {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        avatar={avatar}
        location={location}
        likes={likes}
        views={views}
        followers={followers}
      ></Profile>
      <Statistics title="Upload stats" stats={statsJSON}></Statistics>
      <Friendlist friends={friendsJSON}></Friendlist>
      <TransactionHistory items={transactionsJSON}></TransactionHistory>
    </>
  );
}
