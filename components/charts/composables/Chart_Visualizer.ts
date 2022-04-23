import themes from '@styles/themes/themes';
import { ChartStatus } from '@_types/webtoon-type';
import { graphic } from 'echarts';
import { getChartStatusFactory, getChartToolTip } from '../chart-utils';
import { ChartsProps } from './ECharts';

function setOption(
  xAxisData: string[],
  seriesData: number[],
  status?: ChartStatus,
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
        symbolSize: 5,
        showAllSymbol: true,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getChartStatusFactory(status || 'NONE', 100),
          },
          {
            offset: 1,
            color:
              status == 'UP'
                ? themes.colors.point_up_0
                : themes.colors.point_down_0,
          },
        ]),
        lineStyle: {
          color: '#FF948D',
          width: 1,
        },
        areaStyle: {},
        markPoint: {
          data: [
            {
              name: '최고',
              type: 'max',
            },
            {
              name: '최저',
              type: 'min',
            },
            {
              name: '첫지점',
              valueDim: 'x',
              type: 'min',
              label: {
                show: false,
              },
              symbol: 'circle',
              symbolSize: 5,
              itemStyle: {
                color: getChartStatusFactory(status || 'NONE', 100),
              },
            },
            {
              name: '마지막지점',
              valueIndex: 0,
              type: 'max',
              label: {
                show: false,
              },
              symbol: 'circle',
              symbolSize: 5,
              itemStyle: {
                color: getChartStatusFactory(status || 'NONE', 100),
              },
            },
          ],
          label: {
            show: true,
            color: '#767676',
            formatter: '{b} {@score}점',
            fontFamily: 'Pretendard',
            fontSize: '10px',
            fontWeight: 500,
            opacity: 0.8,
            align: 'center',
            verticalAlign: 'bottom',
            lineHeight: 14.4,
            padding: [0, 0, 15, 0],
          },
          symbol: 'roundRect',
          symbolSize: 1,
        },
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
