import styled from '@emotion/styled';
import Image from 'next/image';

type ImgProps = {
  width: string;
  height: string;
};

const ProfileImgWrap = styled.div<ImgProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ProfileImg = styled(Image)`
  border-radius: 50%;
`;

export { ProfileImgWrap, ProfileImg };
