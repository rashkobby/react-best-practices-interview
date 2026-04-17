import type { Todo } from "./types/todo"

export let todos: Todo[] = []
export let idCounter = 100

export function syncTodos(data: Todo[]) {
  todos = data
}

export function syncCounter(data: Todo[]) {
  const highestId = data.reduce((maxId, todo) => Math.max(maxId, todo.id), 99)
  idCounter = highestId + 1
}

export function getNextTodoId() {
  const nextId = idCounter
  idCounter += 1
  return nextId
}
