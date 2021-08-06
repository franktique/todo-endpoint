import getAxios from "../getAxios";
import { AxiosRequestConfig, AxiosInstance } from "axios";
import { Todo, updateResponse } from "../../types";

export default class TodoService {
  axios: AxiosInstance;
  constructor() {
    this.axios = getAxios();
  }

  public getTodoList = (
    requestConfig: AxiosRequestConfig = {}
  ): Promise<Todo[]> => {
    return this.axios
      .get(`/get`, requestConfig)
      .then(({ data }) => data)
      .catch((e) => {
        console.log(e);
      });
  };

  public updateTodo = (
    id: number,
    isComplete: boolean,
    requestConfig: AxiosRequestConfig = {}
  ): Promise<updateResponse> => {
    return this.axios
      .patch(`/patch/${id}`, `{isComplete=${isComplete}}`, requestConfig)
      .then(({ data }) => data)
      .catch((e) => {
        console.log(e);
      });
  };
}
