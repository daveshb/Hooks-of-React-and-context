import React from 'react'
import { TodoListList } from './TodoListList'

export const TodoListItem = ({todos, handleDelete, handleToggle}) => {
  return (
    <ul className='list-group list-group-flush'>
            {
                todos.map((todo,i)  =>(
                    <TodoListList 
                    key={todo.id}
                    todo ={todo}
                    index ={i}
                    handleDelete ={handleDelete}
                    handleToggle ={handleToggle}
                    />
                ))
            }
        </ul>
  )
}
