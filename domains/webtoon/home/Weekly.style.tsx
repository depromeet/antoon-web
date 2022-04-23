import styled from '@emotion/styled';

const WeeklyWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  padding-bottom: 2rem;
  width: 100%;
`;

const CarouselBox = styled.div`
  flex: 0 0 33%;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 100px;
  max-width: 100px;
  height: 100px;
  max-height: 100px;
`;

export { WeeklyWrapper, CarouselBox };
