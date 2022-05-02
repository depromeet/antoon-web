import styled from '@emotion/styled';

const GenresWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 2.4rem;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 144px;
  height: 115px;
`;

export { GenresWrapper, CarouselBox };
