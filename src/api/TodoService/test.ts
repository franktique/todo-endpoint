import TodoService from "../../api/TodoService";
import { Todo, updateResponse } from "../../types";

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

const getMock = jest.fn();
getMock.mockImplementation((): Promise<Todo[]> => {
  return Promise.resolve(todos);
});

const patchMock = jest.fn();
patchMock.mockImplementation((): Promise<updateResponse[]> => {
  return Promise.resolve([{ status: "success" }]);
});

jest.mock("../getAxios", () => {
  return jest.fn().mockImplementation(() => {
    return { get: getMock, patch: patchMock };
  });
});
const todoService = new TodoService();

describe("TodoService", () => {
  it("should call axios.get", async () => {
    await todoService.getTodoList();
    expect(getMock).toHaveBeenCalled();
  });

  it("should call axios.patch", async () => {
    await todoService.updateTodo(1, true);
    expect(patchMock).toHaveBeenCalled();
  });
});
