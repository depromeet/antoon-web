/* eslint-disable @typescript-eslint/ban-types */
import { SVG } from '@constants/icon-constants';
import themes from '@styles/themes/themes';
import { ChartStatus } from '@_types/webtoon-type';

const getChartToolTip = (params: any) => {
  return params instanceof Array && params.length
    ? params.reduce(
        (acc, param) =>
          (acc += `${SVG.STAR} <b>${param.value}</b>${
            param.data.unit || ''
          } point`),
        `<b><span>${params[0].axisValueLabel} - </span></b>`,
      )
    : null;
};

const getChartToolBoxTooltip = (params: any) => {
  return `<span>
            ${SVG.LABEL}
            ${params.name == 'line' ? 'Line' : 'Bar'} 차트
          </span>
    `;
};

const getChartStatusFactory = (status: ChartStatus, gradient: number) => {
  switch (status) {
    case 'UP':
      return themes.colors.point_up_100;
    case 'DOWN':
      return themes.colors.point_down_100;
    default:
      return themes.colors.point_none_100;
  }
};

export { getChartToolTip, getChartToolBoxTooltip, getChartStatusFactory };
