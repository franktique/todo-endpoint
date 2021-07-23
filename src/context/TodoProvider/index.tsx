import {createContext, useContext, useState, useEffect } from 'react';
import TodoService from '../../api/TodoService'
import {Todo, TodoContextType} from '../../types'

const TodoContext = createContext<TodoContextType>({})

export function useTodo(){
    return useContext(TodoContext)
}

//type Props = React.PropsWithChildren<Record<string, unknown>>;

export function TodoProvider({children}:any) {

    const [todos, setTodos] = useState<Todo[]>([])
    const todoService = new TodoService();

    useEffect(()=>{ 
        console.log('useEffect')
        todoService.getTodoList()
            .then((data)=>{

               const withDuedate = data.filter(item=> item.dueDate && !item.isComplete).sort((a,b)=> {return (a.dueDate && b.dueDate && a.dueDate>b.dueDate?1:-1)});
               const noDuedate = data.filter(item=> !item.dueDate && !item.isComplete);
               const completed = data.filter(item=> item.isComplete);

               setTodos(withDuedate.concat(noDuedate).concat(completed));
        })

    },[])

    const updateTodo = (id:number, isComplete:boolean) => {
        return todoService.updateTodo(id, isComplete)
    }

    return (
        <TodoContext.Provider value={{todos:todos, updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}