import styled from '@emotion/styled';

const PopularWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 0;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 120px;
  height: 120px;
`;

export { PopularWrapper, CarouselBox };
