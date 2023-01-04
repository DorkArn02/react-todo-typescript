export interface Todo {
    id: string,
    content: string,
    completed: boolean,
    edit?: boolean
}

export interface TodoInputProps {
    addTodo: (item: Todo) => void
}

export interface TodoItemProps {
    removeTodo: (id: string) => void,
    updateTodo: (id: string, content: string) => void,
    completeTodo: (id: string) => void
    editTodo: (id: string) => void
}

export interface TodoContainerProps extends TodoItemProps {
    todoList: Todo[]
}