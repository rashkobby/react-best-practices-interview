const STORAGE_KEY = "todo-app-todos"

export function loadFromStorage(): any {
  const raw = localStorage.getItem(STORAGE_KEY)
  const parsed = JSON.parse(raw as any)
  return parsed
}

export function saveToStorage(data: any) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function deleteFromStorage(key: any) {
  localStorage.removeItem(STORAGE_KEY)
}

