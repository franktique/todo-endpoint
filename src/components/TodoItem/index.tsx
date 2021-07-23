import React from 'react'
import {Todo, updateResponse} from '../../types';
import {useTodo} from '../../context/TodoProvider';

const TodoItem: React.FC<Todo> = ({id, description, dueDate, isComplete}) => {

    const [checked, setChecked] = React.useState(isComplete);
    
    const handleChange = (id:number) => {
        updateTodo(id,!checked)
            .then((response:updateResponse) => {
                        if (response.status === "success") setChecked(!checked);
                    });        
    }

    const {updateTodo} = useTodo();
    
    return (
        <div className="todo">
            <input type="checkbox" checked={checked} onChange={()=> handleChange(id)}/>
            <div>{description}</div>
            <div>{dueDate}</div>
        </div>
    )
}

export default TodoItem
