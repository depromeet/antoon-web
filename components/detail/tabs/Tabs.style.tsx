import styled from '@emotion/styled';

const TabsWrapper = styled.div`
  position: relative;
  margin: -14rem 20px;
  width: 90%;
  height: 36px;
  font-size: 13px;
  clear: left;
`;
const Tabs = styled.div`
  position: relative;
  margin: 10px 20px 10px 20px;
  width: 100%;
  height: 36px;
  font-size: 13px;
`;

const TabsHeader = styled.div`
  background: rgba(196, 196, 196, 0.2);
  padding: 10px 6px 10px 0px;
  display: flex;
  border-radius: 10px;
`;

const Tab = styled.div`
  position: relative;
  width: 25%;
  text-align: center;
  padding: 3px 10px;
  z-index: 2;
  color: '#000';
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  opacity: 0.6;

  & .active {
      font - weight: 700;
  }`;
const TabIndicator = styled.div`
  position: absolute;
  width: calc(18%);
  height: 34px;
  background: #ffffff;
  top: 4px;
  left: 12px;
  border-radius: 10px;
  transition: all 300ms ease-in-out;
`;

export { TabsWrapper, Tabs, TabsHeader, Tab, TabIndicator };
