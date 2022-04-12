import styled from '@emotion/styled';
import Image from 'next/image';

const ThumbnailWrap = styled.div<{ scale: boolean }>`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  width: 50rem;
  height: 33rem;
  overflow: hidden;
  object-fit: cover;

  &:hover img {
    transform: ${(scale) => (scale ? 'scale(1.1)' : 'scale(1)')};
    opacity: 1;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  }
`;

const ThumbnailImg = styled(Image)`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  transition: all 0.5s;
  opacity: 0.8;
  z-index: 10;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.black_700};
  width: 100%;
  object-fit: cover;
`;

export { ThumbnailWrap, ThumbnailImg };
