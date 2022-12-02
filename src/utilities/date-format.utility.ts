import dayjs from "dayjs";

export const toLocalDate = (date: Date | string | number, format: string = 'DD/MM/YYYY hh:mm a') => {
  if(!date) return '';
  return dayjs(date).format(format)
};
