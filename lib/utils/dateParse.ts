export const msToDate = (ms: number) => {
  const date = new Date(ms * 1000);
  const msToDay = date.getDay();
  const msToDate = date.getDate();
  const msToMonth = date.getMonth();
  const msToYear = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return {
    day: days[msToDay],
    date: msToDate,
    month: months[msToMonth],
    year: msToYear,
  };
};
