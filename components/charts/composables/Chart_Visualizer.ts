import { graphic } from 'echarts';
import { getChartToolTip } from '../chart-utils';
import { ChartsProps } from './ECharts';

function setOption(
  xAxisData: string[],
  seriesData: number[],
): ChartsProps['option'] {
  return {
    title: {
      show: false,
      text: '9.98점',
      subtext: '어제보다 +0.1점(0.5%)',
      textStyle: {
        color: '#000',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '3.6rem',
        width: '10.9rem',
      },
      subtextStyle: {
        color: '#000',
        opacity: 0.6,
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontSize: '1.5rem',
        fontWeight: 400,
        width: '13rem',
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
      axisLine: {
        show: false,
      },
      offset: 8,
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 'auto',
        margin: 8,
        align: 'center',
        padding: [10, 0, 0, 0],
        overflow: 'hidden',
        hideOverlap: true,
        fontStyle: 'normal',
        fontWeight: 400,
        fontFamily: 'Preahvihear',
        fontSize: '1rem',
      },

      lineHeight: '144%',
    },
    yAxis: {
      type: 'value',
      show: true,
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#FF948D',
          width: 1,
          type: 'solid',
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: 'Toon-Rate',
        data: seriesData,
        type: 'line',
        smooth: true,
        symbol: 'none',
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(255, 41, 28, 0.5)' },
          { offset: 1, color: 'rgba(196, 196, 196, 0)' },
        ]),
        lineStyle: {
          color: '#FF948D',
          width: 1,
        },
        areaStyle: {},
      },
    ],
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        textShadowBlur: 30,
      },
      alwaysShowContent: true,
      formatter: (params: any) => getChartToolTip(params),
      axisPointer: {
        type: 'line',
        animation: true,
      },
    },
    grid: {
      left: '8%',
      right: '8%',
      top: '10%',
      bottom: '50%',
    },
  };
}

export default setOption;
