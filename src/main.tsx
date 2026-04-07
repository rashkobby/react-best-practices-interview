import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

const STORAGE_KEY = "todo-app-todos"

if (!localStorage.getItem(STORAGE_KEY)) {
  const seedData = [
    { id: 1, title: "Buy groceries", completed: false },
    { _id: 2, name: "Walk the dog", done: true },
    { id: 3, text: "Read a book", completed: false, done: false },
    { identifier: 4, title: "Fix the bug", isDone: false },
    { id: "5", title: "Call mom", completed: null },
    { id: 6, completed: false },
  ]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData))
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

