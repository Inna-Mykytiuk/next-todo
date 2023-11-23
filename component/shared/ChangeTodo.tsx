import { Form } from "../ui/Form"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { changeStatus } from "@/app/actions/todoActions"
import { todoType } from "@/types/todoTypes"

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <div>
      <Form action={changeStatus}>
        <Input
          name="inputId"
          value={todo.id}
          type="hidden"
        />
        <Button
          type="submit"
          actionButton={todo.action}
          text={<AiOutlineCheckCircle />}
        />
      </Form>
    </div>
  )
}

export { ChangeTodo }
