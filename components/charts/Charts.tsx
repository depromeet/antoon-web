import React, { useEffect, useState } from 'react';
import ReactECharts from './composables/ECharts';
import {
  ChartContainer,
  ChartWrapper,
  Tab,
  TabIndicator,
  Tabs,
  TabsHeader,
} from './composables/Charts.style';
import { ChartData } from '@_types/chart-type';
import setOption from './composables/Chart_Visualizer';

interface Props {
  chartData: ChartData;
  forceUpdate: boolean;
}

function Charts({ chartData, forceUpdate }: Props) {
  const xAxisData = Object.keys(chartData.timeseries);

  return (
    <ChartWrapper>
      <ChartContainer>
        <ReactECharts
          option={setOption(
            xAxisData,
            xAxisData.map((k) => chartData.timeseries[k]),
          )}
        />
        {/*
        <Tabs>
          <TabsHeader>
            <Tab className="active">1일</Tab>
            <Tab>1주</Tab>
            <Tab>1달</Tab>
            <Tab>3달</Tab>x
          </TabsHeader>
          <TabIndicator className="tab-indicator"></TabIndicator>
        </Tabs>
          */}
      </ChartContainer>
    </ChartWrapper>
  );
}
export default Charts;
