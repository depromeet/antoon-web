/**
 * @name time파서
 * @param date @type {string} 00:00
 */
export const calculateDateTimeFomramtter = (date: string) => {
  const t = date.split('T');
  return `${t[0].substring(5)} ${t[1].substring(0, 5)}`;
};
