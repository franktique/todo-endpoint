import React from "react";
import { useState } from "react";
import { Todo } from "../../types";
import { useTodo } from "../../context/TodoProvider";
import { StyledTodoItem, StyledDateDiv, StyledLoader } from "./Styled";
import formatDate from "../../utils/formatDate";

const TodoItem: React.FC<Todo> = ({
  id,
  description,
  dueDate,
  isComplete,
  overDue,
}) => {
  const { updateTodo } = useTodo();

  const [loading, setLoading] = useState(false);

  return (
    <StyledTodoItem isComplete={isComplete} overDue={overDue}>
      {!loading ? (
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => {
            setLoading(true);
            updateTodo(id, !isComplete, setLoading);
          }}
        />
      ) : (
        <StyledLoader />
      )}
      {isComplete ? (
        <del data-testid={`todo-description-${id}`}>{description}</del>
      ) : (
        <div data-testid={`todo-description-${id}`}>{description}</div>
      )}
      {dueDate && (
        <StyledDateDiv isComplete={isComplete} overDue={overDue}>
          {formatDate(dueDate)}
        </StyledDateDiv>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;
