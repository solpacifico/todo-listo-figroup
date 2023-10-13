import { Category } from   "./Category"
export interface TodoItem{
    /**
     * Unique Identificator 
     */
    id?:number;
    /**
     * Description of todo Item
     */
    description:string;

    /**
     * Status of todo item     
     */
    isDone:boolean;
    /**
     * Due date for todo item
     */
    dueDate?:Date

    /**
     * List ot categories 
     */
    categories?:Category[];

}