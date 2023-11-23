import { ChangeTodo } from "./ChangeTodo";

const Todo = ({ todo }) => {
  return (
    <div className="w-full flex items-center justify-between py-[30px] px-[20px] rounded-2xl bg-white" style={{ background: '#ffffff' }}>
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase text-black">{todo.title}</span>
    </div>
  )
}

export { Todo };
