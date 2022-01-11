import PropTypes from "prop-types";
import friends from "../../data/friends.json";
import {
  Friend,
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendName,
} from "./friendList.style";

export default function FriendList() {
  return (
    <Friend>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
          <FriendImg src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </Friend>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
