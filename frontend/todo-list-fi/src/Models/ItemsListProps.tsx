import { TodoItem } from "../Types/TodoItem";

export interface ItemListProps{
    
    todoItemArray?:TodoItem[];

    isLoading?:boolean;

    isDescriptionEdit?:boolean;

    isDateEdit?:boolean;

    todoItemStateClickHandler?:(isDone:boolean, id:number)=> void;    

    todoItemDateUpdateHandler?:(date:Date,  id:number)=> void;

    UpdateTextClickHandler?:(descrption:string,id:number)=> void;    

    DeleteActionClickHandler?:(id:number) =>void;

    
    
}
    

        

