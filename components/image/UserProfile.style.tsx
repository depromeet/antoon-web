import styled from '@emotion/styled';
import Image from 'next/image';

const ProfileImgWrap = styled.div`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
`;

const ProfileImg = styled(Image)`
  border-radius: 50%;
`;

export { ProfileImgWrap, ProfileImg };
