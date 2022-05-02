import React, { useRef, useState } from 'react';
import { TabsHeader, Tab, TabIndicator, TabsWrapper } from './Tabs.style';

function Tabs() {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabsHeaderRef = useRef<HTMLDivElement>(null);
  const dayArr = ['1일', '1주', '1달', '3달'];
  const [currentTab, setCurrentTab] = useState(dayArr[0]);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurrentTab(e.currentTarget.textContent || '');
    if (indicatorRef.current != null)
      indicatorRef.current.style.left = `${e.currentTarget.offsetLeft + 4}px`;
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
