import styled from '@emotion/styled';

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
  overflow-x: scroll;
  user-select: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export { CarouselWrapper };
