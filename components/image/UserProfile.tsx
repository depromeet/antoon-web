import React from 'react';

import { ImgProps, ProfileImgWrap, ProfileImg } from './UserProfile.style';

function UserProfile({ src, width, height }: ImgProps & { src: string }) {
  return (
    <ProfileImgWrap width={width} height={height}>
      <ProfileImg src={src} width="100%" height="100%" />
    </ProfileImgWrap>
  );
}

export default UserProfile;
