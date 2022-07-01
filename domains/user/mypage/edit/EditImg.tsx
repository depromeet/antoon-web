import { useState, ChangeEvent } from 'react';

import { usePatchUserImg } from '@apis/user';

import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

import UserProfile from '@components/image/UserProfile';

import { UserProfileForm, UserProfileInput } from './EditImg.style';

import { IUser } from '@_types/user-type';

function EditImg({ user }: IUser) {
  const [userImg, setUserImg] = useState<string>('');

  const formData = new FormData();

  const { mutate: mutatePatchUserImg } = usePatchUserImg(userImg);

  const uploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        formData.append('file', file);
        setUserImg(String(reader.result));
        mutatePatchUserImg();
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
    </UserProfileForm>
  );
}

export default EditImg;
