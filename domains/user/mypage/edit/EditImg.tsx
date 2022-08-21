import { useState, ChangeEvent } from 'react';

import { usePatchImage } from '@apis/user';

import DefaultProfile from '@assets/images/DefaultProfile';

import ProfileImage from '@components/image/ProfileImage';

import { ProfileImageForm, ProfileImageInput } from './EditImg.style';

import { IUser } from '@_types/user-type';

function EditImg({ user }: IUser) {
  const [userImg, setUserImg] = useState<string>('');

  const formData = new FormData();

  const { mutate: mutatePatchProfileImage } = usePatchImage(userImg);

  const uploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        formData.append('file', file);
        setUserImg(String(reader.result));
        mutatePatchProfileImage();
      };
    }
  };

  return (
    <ProfileImageForm>
      <ProfileImageInput
        id="user-profile-input"
        type="file"
        name="image"
        accept="image/*"
        onChange={uploadImg}
      />
      <label htmlFor="user-profile-input">
        {userImg ? (
          <ProfileImage src={userImg} width="100" height="100" />
        ) : user ? (
          <ProfileImage src={user.imageUrl} width="100" height="100" />
        ) : (
          <DefaultProfile width="100" height="100" />
        )}
      </label>
    </ProfileImageForm>
  );
}

export default EditImg;
