import { ChangeTodo } from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";
import { EditTodo } from "./EditTodo";
import { DeleteTodo } from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  }

  return (
    <div className="w-full flex items-center justify-between py-[30px] px-[20px] rounded-2xl bg-white" style={todoStyle}>
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase text-black">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  )
}

export { Todo };
