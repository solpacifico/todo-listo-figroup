import React, { createContext,useContext } from 'react';

import { TodoItem } from '../Types/TodoItem';
import http from './htttp-common';



  

 const getTodoItems =  () => {
   return http.get<Array<TodoItem>>('/TodoItems');
}


function getTodoItem(id:number){
    return http.get<Array<TodoItem>>(`/TodoItems/${id}`);
}

function postTodoItem(todoItem:TodoItem){
   return http.post<TodoItem>('TodoItems', todoItem)
}

function updateTodoItem(id:number,todoItem:TodoItem){
    return http.put<TodoItem>(`/TodoItems/${id}`, todoItem);
}


function deleteTodoItem(id:number){
    return http.delete<TodoItem>(`/TodoItems/${id}`);
}


const TodoItemApiService = {
    getTodoItems,
    getTodoItem,
    postTodoItem,
    updateTodoItem,
    deleteTodoItem

  };


export default  TodoItemApiService  ;