import TodoItem from ".";
import { render } from "@testing-library/react";

const todo = {
  id: 1,
  description: "sample todo",
  dueDate: new Date("Tue Aug 3 2021 00:00:00 GMT-0700 (Pacific Daylight Time)"),
  isComplete: false,
  overDue: true,
};

describe("TodoItem", () => {
  it("renders with correct description", () => {
    const { getByTestId } = render(<TodoItem key={todo.id} {...todo} />);
    const description = getByTestId("todo-description-1");
    expect(description.textContent).toEqual("sample todo");
  });
});
