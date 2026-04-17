import { useState, type ChangeEvent, type FormEvent } from "react"

type AddTodoProps = {
  onAdd: (title: string) => void
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState("")
  const trimmedTitle = title.trim()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!trimmedTitle) {
      return
    }

    onAdd(trimmedTitle)
    setTitle("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit" disabled={!trimmedTitle}>
        Add
      </button>
    </form>
  )
}
