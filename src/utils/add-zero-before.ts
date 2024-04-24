export const addZeroBefore = (num: number): string => String(num).length < 2 ? `0${num}` : String(num);
