import { useRouter } from 'next/router';

import ProfileImage from '@components/image/ProfileImage';

import ChebronRightIcon from '@assets/icons/ChebronRightIcon';
import DefaultProfile from '@assets/images/DefaultProfile';

import {
  ProfileWrap,
  EditNameWrap,
  Name,
  DefaultName,
} from '@domains/user/mypage/Profile.style';

import { IProfile } from '@_types/user-type';

function Profile({ profile }: IProfile) {
  const router = useRouter();

  return (
    <ProfileWrap>
      {profile ? (
        <>
          <ProfileImage src={profile.imageUrl} width="56" height="56" />
          <EditNameWrap
            onClick={() => {
              router.push('/user/mypage/edit');
            }}
          >
            <Name>{profile.name}</Name>
            <ChebronRightIcon />
          </EditNameWrap>
        </>
      ) : (
        <>
          <DefaultProfile width="56" height="56" />
          <DefaultName>
            로그인을 하시면
            <br />더 많은 기능을 이용할 수 있어요!
          </DefaultName>
        </>
      )}
    </ProfileWrap>
  );
}

export default Profile;
