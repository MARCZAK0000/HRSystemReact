export const CurrentDate = (): string => {
  const date = new Date();
  let month: string =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  let day: string =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  let hours: string =
    date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  let minutes: string =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  let seconds: string =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;

  return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};
