import PropTypes from 'prop-types';
import { Wrapper } from './FriendList.styled.jsx';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Wrapper>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
