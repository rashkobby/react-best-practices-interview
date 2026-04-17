import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "./todo-operations"
import type { Todo } from "./types/todo"

describe("todo operations", () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
      createdAt: "2026-04-16T00:00:00.000Z",
    },
    {
      id: 2,
      title: "Walk the dog",
      completed: true,
      createdAt: "2026-04-16T01:00:00.000Z",
    },
  ]

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2026-04-17T00:00:00.000Z"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("adds a todo using the normalized shape", () => {
    const result = addTodo(todos, "Read a book", 3)

    expect(result).toHaveLength(3)
    expect(result[2]).toEqual({
      id: 3,
      title: "Read a book",
      completed: false,
      createdAt: "2026-04-17T00:00:00.000Z",
    })
  })

  it("deletes a todo by id", () => {
    const result = deleteTodo(todos, 1)

    expect(result).toEqual([todos[1]])
  })

  it("toggles completion for the matching todo only", () => {
    const result = toggleTodo(todos, 1)

    expect(result).toEqual([
      { ...todos[0], completed: true },
      todos[1],
    ])
  })

  it("updates the title for the matching todo only", () => {
    const result = updateTodo(todos, 2, "Walk the dogs")

    expect(result).toEqual([
      todos[0],
      { ...todos[1], title: "Walk the dogs" },
    ])
  })
})
