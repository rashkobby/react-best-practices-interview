import TodoItem from "./TodoItem"
import type { Todo } from "../types/todo"

type TodoListProps = {
  todos: Todo[]
  onDelete: (id: number) => void
  onToggle: (id: number) => void
  onUpdate: (id: number, title: string) => void
}

export default function TodoList({
  todos,
  onDelete,
  onToggle,
  onUpdate,
}: TodoListProps) {
  if (todos.length === 0) {
    return <p style={{ color: "#999" }}>No todos yet. Add one above!</p>
  }

  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
}
