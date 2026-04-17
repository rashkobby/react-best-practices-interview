import { useEffect, useState, type ChangeEvent } from "react"
import { getNextTodoId, idCounter, syncCounter, syncTodos, todos as globalTodos } from "./globals"
import { loadFromStorage, saveToStorage } from "./storage"
import { addTodo as addTodoOperation, deleteTodo as deleteTodoOperation, toggleTodo as toggleTodoOperation, updateTodo as updateTodoOperation } from "./todo-operations"
import type { Todo } from "./types/todo"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

type Filter = "all" | "active" | "completed"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const stored = loadFromStorage()
    setTodos(stored)
    syncTodos(stored)
    syncCounter(stored)
  }, [])

  const updateTodos = (nextTodos: Todo[]) => {
    setTodos(nextTodos)
    syncTodos(nextTodos)
    saveToStorage(nextTodos)
  }

  const addTodo = (title: string) => {
    const nextTodos = addTodoOperation(todos, title, getNextTodoId())
    updateTodos(nextTodos)
  }

  const deleteTodo = (id: number) => {
    const nextTodos = deleteTodoOperation(todos, id)
    updateTodos(nextTodos)
  }

  const toggleTodo = (id: number) => {
    const nextTodos = toggleTodoOperation(todos, id)
    updateTodos(nextTodos)
  }

  const updateTodo = (id: number, title: string) => {
    const nextTodos = updateTodoOperation(todos, id, title)
    updateTodos(nextTodos)
  }

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())

    if (!matchesSearch) {
      return false
    }

    if (filter === "active") {
      return !todo.completed
    }

    if (filter === "completed") {
      return todo.completed
    }

    return true
  })

  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "0 16px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          boxSizing: "border-box",
        }}
      />

      <AddTodo onAdd={addTodo} />

      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onUpdate={updateTodo}
      />

      <div
        style={{
          marginTop: "16px",
          color: "#666",
          fontSize: "14px",
          display: "flex",
          gap: "16px",
        }}
      >
        <span>Total (global): {globalTodos.length}</span>
        <span>Completed: {completedCount}</span>
        <span>Total: {todos.length}</span>
        <span>Next id: {idCounter}</span>
      </div>
    </div>
  )
}

export default App
