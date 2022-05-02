import styled from '@emotion/styled';

const PopularWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 2.4rem;
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${(props) => props.theme.bg_color.primary};
  width: 120px;
  height: 120px;
`;

export { PopularWrapper, CarouselBox };
