import {createContext, useContext, useState, useEffect } from 'react';
import TodoService from '../../api/TodoService'
import {Todo, TodoContextType} from '../../types'

const TodoContext = createContext<TodoContextType>({})
const today = new Date();

export function useTodo(){
    return useContext(TodoContext)
}


export function TodoProvider({children}:any) {

    const [todos, setTodos] = useState<Todo[]>([])
    const todoService = new TodoService();

    useEffect(()=>{ 
        todoService.getTodoList()
            .then((data)=>{               
               setTodos(orderTodos(data));
        })
    },[])

    const orderTodos = (data:Todo[]):Todo[] => {
        const withDuedate = data.filter(item=> item.dueDate && !item.isComplete)
                                .sort((a,b)=> {return (a.dueDate && b.dueDate && a.dueDate>b.dueDate?1:-1)})                                       
        const noDuedate = data.filter(item=> !item.dueDate && !item.isComplete);
        const completed = data.filter(item=> item.isComplete);
        
        const  orderedTodos = withDuedate.concat(noDuedate)
                                        .concat(completed)
                                        .map((item)=> ({overDue:item.dueDate && new Date(item.dueDate) < today?true:false,...item}));
        return orderedTodos;
    }

    const updateTodo = (id:number, isComplete:boolean) => {
        return todoService.updateTodo(id, isComplete)
                    .then((response) => {
                        if(response.status==="success") {
                            toggleCompleteTodo(id, isComplete) 
                        }                                           
                    })
    }

    const toggleCompleteTodo = (id:number, isComplete:boolean) => {
        let editTodos = todos;
        editTodos.forEach((todo)=>{
            if(todo.id===id) todo.isComplete =isComplete
        });        
        setTodos(orderTodos(editTodos));
    }

    return (
        <TodoContext.Provider value={{todos:todos, updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}