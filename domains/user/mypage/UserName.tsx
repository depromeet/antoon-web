import { UserNameWrap } from './UserName.style';

function UserName({ name }: { name: string }) {
  return <UserNameWrap>{name}</UserNameWrap>;
}

export default UserName;
