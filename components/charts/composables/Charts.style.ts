import styled from '@emotion/styled';

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9 !important;
`;
const ChartContainer = styled.div`
  height: 40rem;
  margin: 2rem 0rem;
  display: flex;
  flex-direction: row;
  letter-spacing: 0rem;
`;
const ChartVisualiserContainer = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  margin: 2rem 2rem;
  padding: 0rem;
  padding-top: 0;
  @media (min-width: 480rem) {
    padding: 0rem;
    padding-top: 0rem;
  } ;
`;

export { ChartWrapper, ChartContainer, ChartVisualiserContainer };
