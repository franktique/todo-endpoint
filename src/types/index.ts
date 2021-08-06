export interface Todo {
  id: number;
  description: string;
  isComplete: boolean;
  dueDate?: Date;
  overDue?: boolean;
}

export interface TodoListProps {
  useTodo: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface TodoContextType {
  todos?: Todo[];
  updateTodo?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface updateResponse {
  status?: string;
}

export interface StyledTodoItemProps {
  readonly isComplete: boolean;
  readonly overDue?: boolean;
}
