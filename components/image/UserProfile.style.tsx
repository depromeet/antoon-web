import styled from '@emotion/styled';
import Image from 'next/image';

type ImgProps = {
  width: string;
  height: string;
};

const ProfileImgWrap = styled.div<ImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ProfileImg = styled(Image)<{ src: string }>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { type ImgProps, ProfileImgWrap, ProfileImg };
