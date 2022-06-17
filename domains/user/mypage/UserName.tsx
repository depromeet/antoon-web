import ProfileNameEdit from '@assets/icons/ProfileNameEdit';
import { UserNameWrap, Name } from './UserName.style';

function UserName({ name }: { name: string }) {
  return (
    <>
      <UserNameWrap>
        <Name>{name}</Name>
        <ProfileNameEdit />
      </UserNameWrap>
    </>
  );
}

export default UserName;
