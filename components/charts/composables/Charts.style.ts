import styled from '@emotion/styled';

const ChartWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
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
const Tabs = styled.div`
  position: relative;
  margin: 10px auto;
  width: 340px;
  height: 36px;
  font-size: 13px;
`;

const TabsHeader = styled.div`
  background: #c4c4c4;
  padding: 10px 10px;
  display: flex;
  border-radius: 10px;
`;

const Tab = styled.div`
  position: relative;
  width: 24%;
  text-align: center;
  padding: 3px 10px;
  z-index: 2;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  & .active {
      color: black;
      font - weight: 700;
  }`;
const TabIndicator = styled.div`
  position: absolute;
  width: calc(20%);
  height: 34px;
  background: #ffffff;
  top: 4px;
  left: 12px;
  border-radius: 10px;
  transition: all 300ms ease-in-out;
`;

export {
  ChartWrapper,
  ChartContainer,
  ChartVisualiserContainer,
  Tabs,
  Tab,
  TabIndicator,
  TabsHeader,
};
