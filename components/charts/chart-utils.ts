/* eslint-disable @typescript-eslint/ban-types */
import themes from '@styles/themes/themes';
import { ChartStatus } from '@_types/webtoon-type';

const getChartToolTip = (params: any) => {
  return params instanceof Array && params?.length
    ? params.reduce(
        (acc, param) => (acc += ``),
        `<span>${params[0].axisValueLabel}</span>`,
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

const getTodayFormat = () => {
  const d = new Date();
  const s = `
    ${d.getFullYear().toString().substring(2)}.
    ${leadingZeros(d.getMonth() + 1, 2)}.
    ${leadingZeros(d.getDate(), 2)}
  `;
  return s;
};

const leadingZeros = (n: number, digits: number) => {
  let zero = '';
  for (let i = 0; i < digits; i++) zero += '0';
  return (zero + n).slice(-digits);
};

export { getChartToolTip, getChartStatusFactory, getTodayFormat };
