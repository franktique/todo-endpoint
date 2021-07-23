import React from 'react'
import {Todo} from '../../types';
import {useTodo} from '../../context/TodoProvider';
import {StyledTodoItem, StyledDateDiv} from './Styled'
import {formatDate} from '../../utils'

const TodoItem: React.FC<Todo> = ({id, description, dueDate, isComplete, overDue}) => {

    const {updateTodo} = useTodo();
    
    return (
        <StyledTodoItem isComplete={isComplete} overDue={overDue}>
            <input type="checkbox" checked={isComplete} onChange={()=> updateTodo(id,!isComplete)}/>
            {isComplete?<del>{description}</del>:<div>{description}</div>}
            {dueDate && (<StyledDateDiv isComplete={isComplete} overDue={overDue}>{formatDate(dueDate)}</StyledDateDiv>)}
        </StyledTodoItem>
    )
}

export default TodoItem
