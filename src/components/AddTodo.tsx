import { useRef } from "react"

export default function AddTodo({ onAdd }: any) {
  const inputRef: any = useRef()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onAdd(inputRef.current.value)
    inputRef.current.value = ""
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="What needs to be done?"
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit">Add</button>
    </form>
  )
}

