import React from 'react';

import { ProfileImgWrap, ProfileImg } from './UserProfile.style';

type ImgProps = {
  src: string;
  width: string;
  height: string;
};

function UserProfile({ src, width, height }: ImgProps) {
  return (
    <ProfileImgWrap width={width} height={height}>
      <ProfileImg
        src={src}
        width={width}
        height={height}
        layout="fixed"
        objectFit="cover"
      />
    </ProfileImgWrap>
  );
}

export default UserProfile;
