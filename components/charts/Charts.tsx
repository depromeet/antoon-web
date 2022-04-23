import React from 'react';
import ReactECharts from './composables/ECharts';
import { ChartContainer, ChartWrapper } from './composables/Charts.style';
import { ChartData } from '@_types/chart-type';
import setOption from './composables/Chart_Visualizer';
import { ChartStatus } from '@_types/webtoon-type';

interface Props {
  chartData: ChartData;
  forceUpdate?: boolean;
  status: ChartStatus;
}

function Charts({ chartData, forceUpdate, status }: Props) {
  const xAxisData = Object.keys(chartData.timeseries);

  return (
    <ChartWrapper>
      <ChartContainer>
        <ReactECharts
          option={setOption(
            xAxisData,
            xAxisData.map((k) => chartData.timeseries[k]),
            status,
          )}
        />
      </ChartContainer>
    </ChartWrapper>
  );
}
export default Charts;
