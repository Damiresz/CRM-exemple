"use server";
import { z } from "zod";
import { ITodo, TodoListArray } from "./TodoListData";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { error } from "console";

export interface IErrorState  {
  message?: string | null;
  errors?: {
    title?: string[];
    description?: string[];
  };
};

const FormSchema = z.object({
  title: z.string().max(16, { message: "Max length 16" }),
  description: z.string().max(52, { message: "Max length 52" }),
  date: z
    .string()
    .datetime({ message: "Invalid datetime string! Must be UTC." }),
});

const CreateTodo = FormSchema.omit({ date: true });

export const createTodo = (prevErrorState: IErrorState, formData: FormData) => {
  const validatedFields = CreateTodo.safeParse({
    title: formData.get("todoTitle"),
    description: formData.get("todoDescription"),
  });
  if (!validatedFields.success) {
    return {
      message: "Missing Fields. Failed to Create Invoice.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

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
