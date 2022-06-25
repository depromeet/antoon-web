import { useState, ChangeEvent } from 'react';

import { usePatchUserImg } from '@apis/user';

import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';
// import { ProfileImgEdit } from '@assets/icons';

import UserProfile from '@components/image/UserProfile';

import { UserProfileForm, UserProfileInput } from './EditImg.style';

import { IUser } from '@_types/user-type';

function EditImg({ user }: IUser) {
  const [userImg, setUserImg] = useState<string>();

  const { mutate: mutatePatchUserImg } = usePatchUserImg(String(userImg));

  const uploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUserImg(String(reader.result));
        mutatePatchUserImg(reader.result as unknown as void);
      };
    }
  };

  return (
    <UserProfileForm>
      <UserProfileInput
        id="user-profile-input"
        type="file"
        name="image"
        accept="image/*"
        onChange={uploadImg}
      />
      <label htmlFor="user-profile-input">
        {userImg ? (
          <UserProfile src={userImg} width="100" height="100" />
        ) : user ? (
          <UserProfile src={user.imageUrl} width="100" height="100" />
        ) : (
          <ProfileDefaultImg width="100" height="100" />
        )}
      </label>
      {/* <ProfileImgEdit /> */}
    </UserProfileForm>
  );
}

export default EditImg;
