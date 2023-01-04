import { useEffect, useState } from "react"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import TodoContainer from "./components/TodoContainer"
import { Todo } from "./interfaces/interfaces"

function App() {

  const [todoList, setTodoList] = useState<Todo[]>(JSON.parse(localStorage.getItem('react-todo') || '[]'))

  const addTodo = (item: Todo) => {
    setTodoList([...(todoList || []), item])
  }

  const removeTodo = (id: string) => {
    let newList = todoList?.filter(i => i.id !== id)
    setTodoList(newList)
  }

  const updateTodo = (id: string, content: string) => {
    let updatedList = todoList?.map(item => {
      if (item.id === id) {
        return { ...item, content: content, edit: !item.edit }
      }
      return item
    })
    setTodoList(updatedList)
  }

  const markTodo = (id: string) => {
    let updatedList = todoList?.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setTodoList(updatedList)
  }

  const editTodo = (id: string) => {
    let updatedList = todoList?.map(item => {
      if (item.id === id) {
        return { ...item, edit: !item.edit }
      }
      return item
    })
    setTodoList(updatedList)
  }

  useEffect(() => {
    localStorage.setItem('react-todo', JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoContainer editTodo={editTodo} completeTodo={markTodo} removeTodo={removeTodo} updateTodo={updateTodo} todoList={todoList || []} />
    </>
  )
}

export default App
