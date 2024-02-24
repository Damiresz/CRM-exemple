"use server";
import { ITodo, TodoListArray } from "./TodoListData";

export async function fetchTodoList(date: Date): Promise<ITodo[] | null> {
  const currentDate = date.getDate();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const sortedTodoList = TodoListArray.filter((task) => {
      const taskDate = new Date(task.date).getDate();
      return taskDate === currentDate;
    });

    return sortedTodoList;
  } catch {
    return null;
  }
}

