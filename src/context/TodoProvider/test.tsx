import { useTodo, TodoProvider } from ".";
import TodoList from "../../components/TodoList";
import { StyledAppContainer } from "../../components/AppContainer/Styled";
import { Todo } from "../../types";
import { render, waitFor } from "@testing-library/react";

const getTodoListMock = jest.fn();
getTodoListMock.mockImplementation(
  (): Promise<Todo[]> => Promise.resolve(todos)
);
jest.mock("../../api/TodoService", () => {
  return jest.fn().mockImplementation(() => {
    return { getTodoList: getTodoListMock };
  });
});

const todos: Todo[] = [
  {
    id: 1,
    description: "sample todo",
    dueDate: new Date(
      "Tue Aug 3 2021 00:00:00 GMT-0700 (Pacific Daylight Time)"
    ),
    isComplete: false,
    overDue: true,
  },
  {
    id: 2,
    description: "sample todo2",
    dueDate: new Date(
      "Tue Aug 13 2021 00:00:00 GMT-0700 (Pacific Daylight Time)"
    ),
    isComplete: true,
    overDue: false,
  },
];

describe("TodoProvider", () => {
  it("renders with mock data", async () => {
    const { getByTestId } = render(
      <TodoProvider>
        <StyledAppContainer>
          <TodoList useTodo={useTodo} />
        </StyledAppContainer>
      </TodoProvider>
    );
    await waitFor(() => {
      const itemOneDescription = getByTestId("todo-description-1");
      expect(itemOneDescription.textContent).toEqual("sample todo");

      const itemTwoDescription = getByTestId("todo-description-2");
      expect(itemTwoDescription.textContent).toEqual("sample todo2");
    });
  });
});
