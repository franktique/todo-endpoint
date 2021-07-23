import React from 'react';
import {useTodo} from '../../context/TodoProvider';
import TodoItem from '../TodoItem';

const TodoList: React.FC<any> = (props) => {

    const {todos} = useTodo();
    
    return (
        <div className="todo-list">            
            {(todos && todos[0]) ?(todos.map(todo => {
                        return <TodoItem key={todo.id} {...todo}/>
                    })

            )
            :(<div>Loading...</div>)
            }
        </div>

    )
}

export default TodoList
