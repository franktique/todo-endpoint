import React from 'react';
import { useTodo } from '../../context/TodoProvider';
import TodoItem from '../TodoItem';
import { StyledTodoList } from './Styled';

const TodoList: React.FC<any> = (props) => {
  const { todos } = useTodo();

  return (
    <StyledTodoList>
      {todos && todos[0] ? (
        todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </StyledTodoList>
  );
};

export default TodoList;
