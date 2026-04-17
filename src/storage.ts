import { normalizeTodos } from "./todo-utils"
import type { Todo } from "./types/todo"

const STORAGE_KEY = "todo-app-todos"

export function loadFromStorage(): Todo[] {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return []
  }

  try {
    return normalizeTodos(JSON.parse(raw))
  } catch {
    return []
  }
}

export function saveToStorage(data: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
