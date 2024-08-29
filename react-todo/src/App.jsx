import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {
  return(
    <div>
      <TodoList />
      <AddTodoForm />
    </div>
  )
}
export default App
