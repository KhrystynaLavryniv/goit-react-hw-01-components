import React from "react";
import PropTypes from "prop-types";
// import ReactDOM from 'react-dom';
import {
  ProfileSection,
  ProfileCard,
  UserImg,
  UserName,
  UserInfo,
  UserStats,
  UserStatsItem,
  UserStatsName,
  UserStatsQuantity,
} from "./profile.style";

function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return (
    <ProfileSection>
      <ProfileCard>
        <UserImg src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </ProfileCard>

      <UserStats>
        <UserStatsItem>
          <UserStatsName>Followers </UserStatsName>
          <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsName>Views </UserStatsName>
          <UserStatsQuantity>{stats.views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsName>Likes </UserStatsName>
          <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStats>
    </ProfileSection>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
