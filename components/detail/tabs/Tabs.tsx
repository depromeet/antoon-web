import React, { useEffect, useRef, useState } from 'react';
import { TabsHeader, Tab, TabIndicator, TabsWrapper } from './Tabs.style';

function Tabs() {
  const indicatorRef = useRef<any>(null);
  const tabsHeaderRef = useRef<any>(null);
  const dayArr = ['1일', '1주', '1달', '3달'];
  const [currentTab, setCurrentTab] = useState(dayArr[0]);
  const [tabsWidth, setTabsWidth] = useState(0);

  useEffect(() => {
    setTabsWidth(tabsHeaderRef.current.offsetWidth / 19);
  }, []);

  const onClickHandler = (e: any) => {
    setCurrentTab(e.currentTarget.textContent);
    indicatorRef.current.style.left = `${e.currentTarget.offsetLeft + 4}px`;
    console.log(e.currentTarget.offsetWidth);
    /*
    indicatorRef.current.style.left = `calc(calc(25%) * ${dayArr.indexOf(
      e.currentTarget.textContent,
    )} + 20px`;
    */
    //console.log(indicatorRef.current.style.left);
  };

  return (
    <TabsWrapper className="tabs">
      <TabsHeader className="tab-header" ref={tabsHeaderRef}>
        {dayArr.map((k, i) => (
          <Tab
            key={i}
            className={currentTab === k ? 'active' : ''}
            onClick={onClickHandler}
          >
            {k}
          </Tab>
        ))}
      </TabsHeader>
      <TabIndicator className="tab-indicator" ref={indicatorRef}></TabIndicator>
    </TabsWrapper>
  );
}

export default Tabs;
