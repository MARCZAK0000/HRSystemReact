export const CurrentDate = (): string => {
  const date = new Date();
  let month: string =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  let day: string =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${date.getFullYear()}-${month}-${day}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
