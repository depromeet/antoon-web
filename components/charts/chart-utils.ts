/* eslint-disable @typescript-eslint/ban-types */
import { SVG } from '@constants/icon-constants';
import themes from '@styles/themes/themes';
import { ChartStatus } from '@_types/webtoon-type';

const getChartToolTip = (params: any) => {
  return params instanceof Array && params?.length
    ? params.reduce(
        (acc, param) =>
          (acc += `${SVG.STAR} <b>${param.value}</b>${
            param.data.unit || ''
          } point`),
        `<b><span>${params[0].axisValueLabel} - </span></b>`,
      )
    : null;
};

const getChartStatusFactory = (status: ChartStatus, gradient: number) => {
  switch (status) {
    case 'UP':
      return themes.colors.secondary.red;
    case 'DOWN':
      return themes.colors.secondary.blue;
    default:
      return themes.colors.chart.point_none_100;
  }
};

export { getChartToolTip, getChartStatusFactory };
