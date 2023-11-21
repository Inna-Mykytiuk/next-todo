import AddTodo from "@/component/shared/AddTodo"

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-500 ml-2">Server Actions</span>
      </h1>

      <div className="flex flex-col justify-center items-center w-[1000px]">
        <AddTodo />
      </div>
    </div>
  )
}
