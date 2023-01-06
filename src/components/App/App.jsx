import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import user from '../Path/user.json';
import data from '../Path/data.json';
import friends from '../Path/friends.json';

export const App = () => {
  return (
    <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />;
    </>
  );
};
