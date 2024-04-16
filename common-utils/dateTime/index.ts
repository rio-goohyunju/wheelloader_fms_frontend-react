import { format } from 'date-fns';

export const getTimeString = (date: string) => {
  format(new Date(date), 'HH:mm');
};

export const getDateString = (date: string) => {
  format(new Date(date), 'yyyy-MM-dd');
};

export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `0${1 + date.getMonth()}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}-${month}-${day}`;
};
