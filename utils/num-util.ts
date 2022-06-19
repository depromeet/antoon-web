/**
 * @title 3자리 콤마
 * @param num
 * @returns string
 * @description 숫자를 3자리 콤마로 변환한다.
 */
export const getToLocaleString = (num: number): string => {
  return num.toLocaleString('ko-KR');
};
