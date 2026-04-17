import { useState, type ChangeEvent } from "react"
import type { Todo } from "../types/todo"

type TodoItemProps = {
  todo: Todo
  onDelete: (id: number) => void
  onToggle: (id: number) => void
  onUpdate: (id: number, title: string) => void
}

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  onUpdate,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.title)

  const handleSave = () => {
    const title = editText.trim()

    if (!title) {
      return
    }

    onUpdate(todo.id, title)
    setIsEditing(false)
  }

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 0",
        borderBottom: "1px solid #eee",
        listStyle: "none",
        textDecoration: todo.completed ? "line-through" : "none",
        opacity: todo.completed ? 0.5 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEditText(e.target.value)
            }
            style={{ flex: 1, padding: "4px" }}
          />
          <button onClick={handleSave}>Save</button>
          <button
            onClick={() => {
              setEditText(todo.title)
              setIsEditing(false)
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span style={{ flex: 1 }}>{todo.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  )
}
