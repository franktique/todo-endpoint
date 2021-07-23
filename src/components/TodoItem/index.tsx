import React from 'react'
import {Todo, updateResponse} from '../../types';
import {useTodo} from '../../context/TodoProvider';
import {StyledTodoItem, StyledDateDiv} from './Styled'
import {formatDate} from '../../utils'

const TodoItem: React.FC<Todo> = ({id, description, dueDate, isComplete, overDue}) => {

    const [checked, setChecked] = React.useState(isComplete);
    
    const handleChange = (id:number) => {
        updateTodo(id,!checked)
            .then((response:updateResponse) => {
                        if (response.status === "success") setChecked(!checked);
                    });        
    }

    const {updateTodo} = useTodo();
    
    return (
        <StyledTodoItem isComplete={isComplete} overDue={overDue}>
            <input type="checkbox" checked={checked} onChange={()=> handleChange(id)}/>
            {isComplete?<del>{description}</del>:<div>{description}</div>}
            {dueDate && (<StyledDateDiv isComplete={isComplete} overDue={overDue}>{formatDate(dueDate)}</StyledDateDiv>)}
        </StyledTodoItem>
    )
}

export default TodoItem
