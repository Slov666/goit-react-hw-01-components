import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
const { friendList, item, Avatar, name, online, offline } = styles;

const FriendList = ({ friends }) => {
  return (
    <ul className={friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={item}>
          <span className={friend.isOnline ? online : offline}></span>
          <img className={Avatar} alt={friend.name} src={friend.avatar} />
          <p className={name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ).isRequired,
};
export default FriendList;
