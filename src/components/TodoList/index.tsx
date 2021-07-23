import React from 'react'
import {useTodo} from '../../context/TodoProvider';
import TodoItem from '../TodoItem';


const TodoList: React.FC<any> = (props) => {

    const {todos} = useTodo();

    if(todos && todos[0]) 
        return (
            <div className="todo-list" key={1}>
                {todos && (todos.map(todo => {
                    return <TodoItem key={todo.id} {...todo}/>
                }))}
            </div>
        )  
    else return <div>Loading...</div> 
}

export default TodoList
