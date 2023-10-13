import { TodoItem } from "./TodoItem"

export type TodoItemServiceContextType = {
    
    
    getTodoItems:() => void;

    GetTodoItemz:(todoItem:TodoItem) => void;

    PostTodoItem:(todoItem:TodoItem) => void;

    UpdateTodoItem:(todoItem:TodoItem) => void;
    
    deleteTodoItem:(todoItem:TodoItem) => void;

}