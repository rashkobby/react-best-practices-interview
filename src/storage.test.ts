import { beforeEach, describe, expect, it } from "vitest"
import { loadFromStorage, saveToStorage } from "./storage"

const STORAGE_KEY = "todo-app-todos"

class LocalStorageMock {
  private store = new Map<string, string>()

  getItem(key: string) {
    return this.store.get(key) ?? null
  }

  setItem(key: string, value: string) {
    this.store.set(key, value)
  }

  removeItem(key: string) {
    this.store.delete(key)
  }

  clear() {
    this.store.clear()
  }
}

beforeEach(() => {
  Object.defineProperty(globalThis, "localStorage", {
    value: new LocalStorageMock(),
    configurable: true,
    writable: true,
  })
})

describe("storage boundaries", () => {
  it("returns an empty array when storage is empty", () => {
    expect(loadFromStorage()).toEqual([])
  })

  it("normalizes legacy todo shapes when loading", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([
        { _id: 2, name: "Walk the dog", done: true },
        { identifier: 4, title: "Fix the bug", isDone: false },
        { id: "5", title: "Call mom", completed: null },
        { id: 6, completed: false },
      ]),
    )

    expect(loadFromStorage()).toEqual([
      {
        id: 2,
        title: "Walk the dog",
        completed: true,
        createdAt: expect.any(String),
      },
      {
        id: 4,
        title: "Fix the bug",
        completed: false,
        createdAt: expect.any(String),
      },
    ])
  })

  it("returns an empty array when storage contains invalid json", () => {
    localStorage.setItem(STORAGE_KEY, "{")

    expect(loadFromStorage()).toEqual([])
  })

  it("persists normalized todos as json", () => {
    const todos = [
      {
        id: 1,
        title: "Buy groceries",
        completed: false,
        createdAt: "2026-04-17T00:00:00.000Z",
      },
    ]

    saveToStorage(todos)

    expect(localStorage.getItem(STORAGE_KEY)).toBe(JSON.stringify(todos))
  })
})
