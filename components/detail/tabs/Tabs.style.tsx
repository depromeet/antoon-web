import styled from '@emotion/styled';

const TabsWrapper = styled.div`
  position: relative;
  clear: left;
  margin: -14rem 20px;
  width: 90%;
  height: 36px;
  font-size: 13px;
`;
const Tabs = styled.div`
  position: relative;
  margin: 10px 20px;
  width: 100%;
  height: 36px;
  font-size: 13px;
`;

const TabsHeader = styled.div`
  display: flex;
  border-radius: 10px;
  background: rgb(196 196 196 / 20%);
  padding: 10px 6px 10px 0;
`;

const Tab = styled.div`
  position: relative;
  transition: all 300ms ease-in-out;
  opacity: 0.6;
  z-index: 2;
  cursor: pointer;
  padding: 3px 10px;
  width: 25%;
  text-align: center;
  color: '#000';
  font-family: Pretendard;
  font-weight: 400;
  font-style: normal;

  & .active {
    font-weight: 700;
  }
`;

const TabIndicator = styled.div`
  position: absolute;
  top: 4px;
  left: 12px;
  transition: all 300ms ease-in-out;
  border-radius: 10px;
  background: #fff;
  width: calc(18%);
  height: 34px;
`;

export { TabsWrapper, Tabs, TabsHeader, Tab, TabIndicator };
