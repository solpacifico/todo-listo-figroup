
import { ItemListProps } from '../../Models/ItemsListProps';
import { TodoItem } from '../../Types/TodoItem';
import ItemCard  from '../ItemCard/ItemCard';

/**
 * Repeater function,
 * @param itemArray 
 * @param props 
 * @returns 
 */
const ItemArray = (itemArray:TodoItem[] | undefined,props:ItemListProps ) =>{
    return(
        //Repeat each item in the array
        itemArray?.map((itemC) => <ItemCard 
            todoItemData={itemC}
            todoItemStateClickHandler={(isdone:boolean) => props.todoItemStateClickHandler 
                && props.todoItemStateClickHandler(itemC.isDone,itemC.id ?? 0)}
                        
                UpdateTextClickHandler = { props.UpdateTextClickHandler   }                            
                todoItemDateUpdateHandler = {props.todoItemDateUpdateHandler}
                DeleteActionClickHandler = {props.DeleteActionClickHandler}   

        ></ItemCard>)

    )

}
/**
 * Stateless functional component for render the list of todoItems
 * @param props 
 * @returns 
 */
export function ItemList(props:ItemListProps)
{
    return(
        <>
            <div>
                {ItemArray(props.todoItemArray, props)}
                
            </div>
        </>

    )
}