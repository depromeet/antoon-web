import { useRouter } from 'next/router';
import React from 'react';
import { ReactEChartsProps } from '../../components/charts/composables/Chart_Options';
import Charts from '../../components/charts/Charts';

const option: ReactEChartsProps["option"] = {
  title:{
    text: "name",
    subtext: "subTitle",
  },
  tooltip: {
    trigger: "axis",
    alwaysShowContent: true,
    axisPointer: {
      type: "line",
      animation: true,
    },
  },
  legend:{
    icon: 'roundRect',
    data: ["group1"]
  },
  grid: {
    left: "10%",
    right: "10%",
    top: "10%",
    bottom: "10%",
  },
  xAxis: {
      type: 'category',
      data: ['04.02', '04.03', '04.04', '04.05', '04.06', '04.07', '04.08']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [3.1, 2.6, 4.8, 4.9, 1.7, 8.0, 9.7],
      type: 'line',
      smooth: true
    }
  ],
}

const ChartTest: React.FC = () => {
    return (
        <div>
            <h3>Chart Test</h3>
            <Charts option={option}/>
        </div>
    );
};
export default ChartTest;