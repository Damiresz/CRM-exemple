"use client";
import { createContext, useState,  } from "react";
import styles from "./Organizer.module.scss";
import { Calendar } from "../Calendar/Calendar";
import { TodoList } from "../TodoList/TodoList";

interface State {
  currentDate: Date;
  date: Date;
  selectedDate: Date;
}

interface IStateContext {
  state: State
  setState: React.Dispatch<
    React.SetStateAction<State>
  >;
}

const CalendarState:State = {
  currentDate: new Date(),
  date: new Date(),
  selectedDate: new Date(),
}

export const StateContext = createContext<IStateContext>({
  state: CalendarState,
  setState: () => {},
});

export function Organizer() {

  const [state, setState] = useState(CalendarState);

  return (
    <StateContext.Provider value={{ state, setState }}>
      <Calendar />
      <TodoList />
    </StateContext.Provider>
  );
}