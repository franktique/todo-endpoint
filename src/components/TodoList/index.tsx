import React from 'react'
import {useTodo} from '../../context/TodoProvider';
import TodoItem from '../TodoItem';


const TodoList: React.FC<any> = (props) => {

    const {todos} = useTodo();
    console.log('todos----')
    console.log(todos)

    return (
        <div className="todo-list" key={1}>
            {todos && (todos.map(todo => {
                console.log('todo')
                console.log(todo)
                return <TodoItem key={todo.id} {...todo}/>
            }))}
        </div>
    )
}

export default TodoList
