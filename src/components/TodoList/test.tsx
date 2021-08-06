import TodoList from ".";
import { TodoContextType } from "../../types";
import { render } from "@testing-library/react";
import * as provider from "../../context/TodoProvider";

const todos: TodoContextType = {
  todos: [
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
  ],
  updateTodo: false,
};

const useTodoMock = jest.spyOn(provider, "useTodo");

useTodoMock.mockImplementation(() => todos);

const { useTodo } = provider;

describe("TodoList", () => {
  it("renders with Todos", () => {
    const { getByTestId } = render(<TodoList useTodo={useTodo} />);

    const itemOneDescription = getByTestId("todo-description-1");
    expect(itemOneDescription.textContent).toEqual("sample todo");

    const itemTwoDescription = getByTestId("todo-description-2");
    expect(itemTwoDescription.textContent).toEqual("sample todo2");
  });
});
