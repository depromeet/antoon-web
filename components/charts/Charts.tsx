import React from 'react';
import ReactECharts from './composables/ECharts';
import { ChartContainer, ChartWrapper } from './composables/Charts.style';
import { ChartData } from '@_types/chart-type';
import setOption from './composables/Chart_Visualizer';
import Tabs from '@components/detail/tabs/Tabs';

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
      </ChartContainer>
    </ChartWrapper>
  );
}
export default Charts;
