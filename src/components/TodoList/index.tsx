import React from "react";
import { TodoListProps, TodoContextType } from "../../types";
import TodoItem from "../TodoItem";
import { StyledTodoList } from "./Styled";

const TodoList: React.FC<TodoListProps> = (props) => {
  const { useTodo } = props;
  const { todos }: TodoContextType = useTodo();

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
