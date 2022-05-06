import React from 'react';

import { ProfileImgWrap, ProfileImg } from './UserProfile.style';

type ImgProps = {
  src: string;
};

function UserProfile({ src }: ImgProps) {
  return (
    <ProfileImgWrap>
      <ProfileImg
        src={src}
        width="32"
        height="32"
        layout="fixed"
        objectFit="cover"
      />
    </ProfileImgWrap>
  );
}

export default UserProfile;
