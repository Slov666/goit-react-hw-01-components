import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
const {
  container,
  about,
  names,
  img,
  hashtag,
  locations,
  popularityBox,
  statsName,
  stats,
} = styles;

const Profile = ({ name, tag, location, likes, views, followers, avatar }) => {
  return (
    <section className={container}>
      <div className={about}>
        <img className={img} src={avatar} alt={name}/>
        <p className={names}>{name}</p>
        <p className={hashtag}>{tag}</p>
        <p className={locations}>{location}</p>
      </div>
      <div className={popularityBox}>
        <span className={statsName}>
          Followers <span className={stats}>{followers}</span>
        </span>
        <span className={statsName}>
          Views <span className={stats}>{likes}</span>
        </span>
        <span className={statsName}>
          Likes <span className={stats}>{views}</span>
        </span>
      </div>
    </section>
  );
};

export default Profile;
Profile.defaultProps = {
  name: 'Name',
};

Profile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  locatiom: PropTypes.string,
  followers: PropTypes.number,
  liles: PropTypes.number,
  views: PropTypes.number,
};
