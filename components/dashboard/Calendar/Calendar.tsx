import styles from "./Calendar.module.scss";
import { useContext } from "react";
import { StateContext } from '../Organizer/Organizer';
import { CalendarData , daysOfWeek, monthsOfYear } from "../Organizer/calendar-data";


export function Calendar() {

  const { state, setState } = useContext(StateContext);

  const monthData = CalendarData(state.date);

  const handlePrevMonthClick = () => {
    const prevMonth = new Date(state.date);

    prevMonth.getMonth() == 0
      ? (prevMonth.setFullYear(prevMonth.getFullYear() - 1),
        prevMonth.setMonth(11))
      : prevMonth.setMonth(prevMonth.getMonth() - 1);

    setState((prevState) => ({ ...prevState, date: prevMonth }));
  };

  const handleNextMonthClick = () => {
    const nextMonth = new Date(state.date);

    nextMonth.getMonth() == 11
      ? (nextMonth.setFullYear(nextMonth.getFullYear() + 1),
        nextMonth.setMonth(0))
      : nextMonth.setMonth(nextMonth.getMonth() + 1);

    setState((prevState) => ({ ...prevState, date: nextMonth }));
  };

  const handleDayClick =  (day: Date) => {
    setState((prevState) => ({ ...prevState, selectedDate: day}));
  };
  return (
    <div className={styles.calendar}>
      <div className={styles.calendar_title}>
        <div>
          <p>{monthsOfYear[state.date.getMonth()]}</p>
          <p>{state.date.getFullYear()}</p>
        </div>
        <div>
          <button onClick={() => handlePrevMonthClick()}>{"<"}</button>
          <button onClick={() => handleNextMonthClick()}>{">"}</button>
        </div>
      </div>
      <table className={styles.calendar_body}>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthData.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) =>
                day ? (
                  <td
                    className={
                      state.selectedDate.getFullYear() === day.getFullYear() &&
                      state.selectedDate.getMonth() === day.getMonth() &&
                      state.selectedDate.getDate() === day.getDate()
                        ? styles.active_day
                        : ""
                    }
                    onClick={() => {
                      handleDayClick(day);
                    }}
                    key={index}
                  >
                    {day.getDate()}
                  </td>
                ) : (
                  <td key={index}></td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

