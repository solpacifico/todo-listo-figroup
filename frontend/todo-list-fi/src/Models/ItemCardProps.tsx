
import { valueType } from "antd/es/statistic/utils";
import { TodoItem } from "../Types/TodoItem";


export interface ItemCardProps{
    todoItemData:TodoItem|undefined;

    isLoading?:boolean;

    isDescriptionEdit?:boolean;

    isDateEdit?:boolean;

    todoItemStateClickHandler?:(isDone:boolean,id:number)=> void;

    descriptionInput?:string;    

    UpdateTextClickHandler?:(description:string,id:number)=> void;    

    todoItemDateUpdateHandler?:(dateStr:Date,id:number)=> void;

    DeleteActionClickHandler?:(id:number) =>void;
}