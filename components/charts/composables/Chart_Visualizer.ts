import themes from '@styles/themes/themes';
import { ChartStatus } from '@_types/webtoon-type';
import { graphic } from 'echarts';
import { getChartStatusFactory, getTodayFormat } from '../chart-utils';
import { ChartsProps } from './ECharts';

function setOption(
  xAxisData: string[],
  seriesData: number[],
  status?: ChartStatus,
): ChartsProps['option'] {
  return {
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
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getChartStatusFactory(status || 'STALE', 100),
          },
          {
            offset: 1,
            color:
              status == 'UP'
                ? themes.colors.chart.point_up_0
                : themes.colors.chart.point_down_0,
          },
        ]),
        lineStyle: {
          color: getChartStatusFactory(status || 'STALE', 100),
          width: 1,
        },
        areaStyle: {},
        markPoint: {
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
      show: true,
      trigger: 'axis',
      textStyle: {
        fontSize: 10,
        color: '#808591',
        fontFamily: 'Pretendard',
        fontWeight: 'medium',
      },
      position: function (
        pos: any,
        params: any,
        dom: any,
        rect: any,
        size: any,
      ) {
        interface Position {
          top: number;
          [key: string]: number;
        }
        const obj: Position = {
          top: 0,
        };
        obj['left'] = pos[0] - 50;
        //obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
        return obj;
      },
      formatter: `${getTodayFormat()} {b0}`,
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#808591',
          dashOffset: 100,
        },
        animation: false,
      },
      extraCssText: 'box-shadow: 0 0 0px rgba(0, 0, 0, 0);',
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
