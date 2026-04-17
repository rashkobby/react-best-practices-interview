import type { Todo } from "./types/todo"

type TodoRecord = Partial<Todo> & {
  _id?: number
  identifier?: number
  name?: string
  text?: string
  done?: boolean
  isDone?: boolean
}

export function normalizeTodo(value: unknown): Todo | null {
  if (!value || typeof value !== "object") {
    return null
  }

  const todo = value as TodoRecord
  const id = todo.id ?? todo._id ?? todo.identifier
  const title = todo.title ?? todo.name ?? todo.text

  if (typeof id !== "number" || typeof title !== "string") {
    return null
  }

  return {
    id,
    title,
    completed: Boolean(todo.completed ?? todo.done ?? todo.isDone),
    createdAt:
      typeof todo.createdAt === "string"
        ? todo.createdAt
        : new Date().toISOString(),
  }
}

export function normalizeTodos(value: unknown): Todo[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((todo) => normalizeTodo(todo))
    .filter((todo): todo is Todo => todo !== null)
}

export function createTodo(title: string, nextId: number): Todo {
  return {
    id: nextId,
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  }
}
