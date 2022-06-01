import React from 'react';
import ReactECharts from './composables/ECharts';
import { ChartContainer, ChartWrapper } from './composables/Charts.style';
import { Graph } from '@_types/chart-type';
import setOption from './composables/Chart_Visualizer';
import { ChartStatus } from '@_types/webtoon-type';
import { calculateDateTimeFomramtter } from '@utils/string-util';

interface Props {
  chartData?: Graph;
  forceUpdate?: boolean;
  status?: ChartStatus;
}

interface xAxisType {
  xAxisKey: string[];
  xAxisData: number[];
}

function Charts({ chartData, forceUpdate, status }: Props) {
  const xAxis: xAxisType = { xAxisKey: [], xAxisData: [] };

  chartData?.graphScores.forEach((e, i) => {
    xAxis.xAxisKey[i] = calculateDateTimeFomramtter(e.snapshotTime);
    xAxis.xAxisData[i] = e.graphScore;
  });

  return (
    <ChartWrapper>
      <ChartContainer>
        <ReactECharts
          option={setOption(xAxis.xAxisKey, xAxis.xAxisData, status)}
        />
      </ChartContainer>
    </ChartWrapper>
  );
}
export default Charts;
