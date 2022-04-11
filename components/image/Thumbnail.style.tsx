import styled from '@emotion/styled';
import Image from 'next/image';

const ThumbnailWrap = styled.div<{ scale: boolean }>`
  width: 50rem;
  height: 33rem;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  &:hover img {
    opacity: 1;
    transform: ${(scale) => (scale ? 'scale(1.1)' : 'scale(1)')};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  }
`;

const ThumbnailImg = styled(Image)`
  width: 100%;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 10;
  display: block;
  opacity: 0.8;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  object-fit: cover;
  transition: all 0.5s;
`;

export { ThumbnailWrap, ThumbnailImg };
