import styled from '@emotion/styled';

const GenresWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 0;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 80px;
  height: 80px;
`;

export { GenresWrapper, CarouselBox };
