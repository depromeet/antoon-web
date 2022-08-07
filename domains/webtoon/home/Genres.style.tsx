import styled from '@emotion/styled';
import { Genre } from '@_types/webtoon-type';
import Image from 'next/image';

const GenresWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 2.4rem;
`;

const CarouselBox = styled.div<{ genreName: Genre }>`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.genres[props.genreName]};
  width: 144px;
  height: 115px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition-duration: 200ms;
      transition-property: background-color, color;
      transition-timing-function: ease;
      opacity: 0.8;
    }
  }
`;

const GenreContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
`;

const GenreThumbnailContainer = styled.div`
  display: flex;
`;

const GenreThumbnail = styled(Image)`
  border-radius: 4rem;
`;

const GenreDescription = styled.div`
  color: ${(props) => props.theme.colors.grayscale.gray_1000};
  font-size: 1.6rem;
  font-weight: 700;
`;

export {
  GenresWrapper,
  CarouselBox,
  GenreContentWrapper,
  GenreThumbnailContainer,
  GenreThumbnail,
  GenreDescription,
};
