import { GoPlus } from "react-icons/go";
import styles from "./TodoList.module.scss";
import { CiEdit } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Organizer/Organizer";
import { fetchTodoList} from "@/app/data/actions";
import { ITodo } from "@/app/data/TodoListData";

export function TodoList() {
  const { state } = useContext(StateContext);
  const [data, setData] = useState<ITodo[] | null>(null);



  useEffect(() => {
    const fetchData = async () => {
      const todoData = await fetchTodoList(state.selectedDate);
      setData(todoData);
    };
    fetchData();
  }, [state.selectedDate]);

  return (
    <div className={styles.todoList}>
      <div>
        <h3>Scheduled</h3>
        <GoPlus />
        <p>View more</p>
      </div>
      {data?.map((todo, index) => (
        <div key={index} className={styles.listItems}>
          <div className={styles.listItem}>
            <div>
              <h5>{todo.name}</h5>
              <CiEdit />
            </div>
            <p>{todo.descriptions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
