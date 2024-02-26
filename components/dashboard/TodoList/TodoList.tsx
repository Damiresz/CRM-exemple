import { GoPlus } from "react-icons/go";
import styles from "./TodoList.module.scss";
import { CiEdit } from "react-icons/ci";
import { useContext, useEffect, useReducer, useState } from "react";
import { StateContext } from "../Organizer/Organizer";
import { IErrorState, createTodo, fetchTodoList } from "@/app/data/actions";
import { ITodo } from "@/app/data/TodoListData";
import { IoClose } from "react-icons/io5";
import { useFormState } from "react-dom";

export function TodoList() {
  const { state } = useContext(StateContext);
  const [data, setData] = useState<ITodo[] | null>(null);
  const [add, setAdd] = useState(false);

  const initialformError: IErrorState = { message: null, errors: {} };
  const [formState, setFormState] = useFormState(createTodo, initialformError);

  const handleAddClick = () => {
    setAdd((prev) => !prev);
  };

  const handleSubmitAdd = () => {};

  useEffect(() => {
    const fetchData = async () => {
      const todoData = await fetchTodoList(state.selectedDate);
      setData(todoData);
    };
    fetchData();
    setAdd((prev) => (prev = false));
  }, [state.selectedDate]);

  return (
    <div className={styles.todoList}>
      <div>
        <h3>Scheduled</h3>
        <button onClick={() => handleAddClick()}>
          <GoPlus />
        </button>
        <p>View more</p>
      </div>
      <div className={styles.listItems}>
        {add && (
          <form action={setFormState} className={styles.addItem}>
            <div>
              <input
                id="todoTitle"
                name="todoTitle"
                type="text"
                placeholder="Title"
              />
              {formState.errors?.title?.map((error) => (
                <span>{error}</span>
              ))}
            </div>
            <div>
              <textarea
                id="todoDescription"
                name="todoDescription"
                placeholder="description"
                rows={5}
              ></textarea>
              {formState.errors?.description?.map((error) => (
                <span>{error}</span>
              ))}
            </div>
            <button type="submit">Add</button>
            <button onClick={() => handleAddClick()}>
              <IoClose />
            </button>
          </form>
        )}
        {data?.map((todo, index) => (
          <div key={index} className={styles.listItem}>
            <div>
              <h5>{todo.name}</h5>
              <CiEdit />
            </div>
            <p>{todo.descriptions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
