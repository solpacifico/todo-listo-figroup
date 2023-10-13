
import { ItemListProps } from '../../Models/ItemsListProps';
import { TodoItem } from '../../Types/TodoItem';
import ItemCard  from '../ItemCard/ItemCard';


const ItemArray = (itemArray:TodoItem[] | undefined,props:ItemListProps ) =>{
    return(
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