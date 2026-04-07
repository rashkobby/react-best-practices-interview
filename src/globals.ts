export let todos: any = []
export let isLoading: any = false
export let currentFilter: any = "all"

export let idCounter: any = 100

export function syncTodos(data: any) {
  todos = data
}

export function incrementCounter() {
  idCounter++
}

