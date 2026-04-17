import { createTodo } from "./todo-utils"
import type { Todo } from "./types/todo"

export function addTodo(todos: Todo[], title: string, nextId: number): Todo[] {
  return [...todos, createTodo(title, nextId)]
}

export function deleteTodo(todos: Todo[], id: number): Todo[] {
  return todos.filter((todo) => todo.id !== id)
}

export function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )
}

export function updateTodo(todos: Todo[], id: number, title: string): Todo[] {
  return todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
}
