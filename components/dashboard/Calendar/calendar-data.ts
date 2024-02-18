
// function getDaysInMonth (date:Date) {
//   return date.getDate();
// }

function getDayOfWeek (date:Date):number {
  const dayOfWeek = date.getDay();

  return dayOfWeek == 0 ? 6 : dayOfWeek -1
}

export function CalendarData(date: Date) {
  const result: (Date | undefined)[][]  = [];

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // Получаем количество дней в месяце
  const monthStartsOn = getDayOfWeek(new Date(date.getFullYear(), date.getMonth(), 1)); // Получаем день недели, с которого начинается месяц

  const year = date.getFullYear();
  const month = date.getMonth();

  let day = 1;

  for (let i = 0; i < Math.ceil((daysInMonth + monthStartsOn) / 7); i++) {
    result[i] = [];

    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
}

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const monthsOfYear = [
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
