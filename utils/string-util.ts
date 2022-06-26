/**
 * @name time파서
 * @param date @type {string} 00:00
 */
export const calculateDateTimeFomramtter = (
  date: string,
  chartType: string,
) => {
  const t = date.split('T');
  if (chartType !== 'days') return `${t[0].substring(5)}`;
  return `${t[1].substring(0, 5)}`;
};

/**
 * @name random-id:난수생성
 * @returns randomId
 */
export const getRandomID = () => String(new Date().getTime());
