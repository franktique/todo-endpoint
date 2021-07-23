export interface Todo {
  id: number;
  description: string;
  isComplete: boolean;
  dueDate?: Date;
}


export interface TodoContextType {
  todos?:Todo[];
  updateTodo?:any;
}

export interface updateResponse {
  status?:string;
}