import React,{useEffect, useState, useRef, LegacyRef, HTMLAttributeAnchorTarget} from "react";
import { TodoItem } from "../Types/TodoItem";
import TodoItemApiService from "../Services/TodoItemApiService";
import { ItemList } from "../components/ItemsList/ItemsList";
import { Button, FloatButton, Input, Space, Tooltip, message } from "antd";
import {FileAddTwoTone, CheckCircleOutlined , CloseCircleOutlined} from '@ant-design/icons';
import "./TodoAppFI.css"
import { Category } from "../Types/Category";


/**
 * Main App compnent
 * @returns 
 */
const TodoAppFi:React.FC=()=>{

    const [todoItemsList,setTodoItemsList] = useState<Array<TodoItem>>([]);
    const [insertMode, setInsertMode] = useState(false);
    const [newEntry, setNewEntry] =  useState("");
    const [messageApi, contextHolder] = message.useMessage()

    useEffect(() => { 
        retrieveTodoItems();  
    },[]);

    const container =  useRef<Element>();

    const handleInpurChange = (event:any) => {
        setNewEntry(event?.target?.value)
    }

    const todoItemStateClickHandler = (isdone:boolean, id:number) =>{
        console.log(isdone);
        console.log(id);
        var itemx = todoItemsList.find((x:TodoItem) => x.id ===id )?? null
        console.log(itemx);
        if(itemx){
            itemx.isDone = !(itemx?.isDone) ?? false;
            const allCategory:Category[] = [{
                id:0,
                title:"string"
            }];
            itemx.categories = allCategory;

        }
        
        uptateTodoItem(itemx);
    }

   const UpdateTextClickHandler =(description:string, id:number)=> {
   
    var itemx = todoItemsList.find((x:TodoItem) => x.id ===id )?? null
    
    if(itemx){
        itemx.description = description;
        const allCategory:Category[] = [{
            id:0,
            title:"string"
        }];
        itemx.categories = allCategory;
    }
    
    uptateTodoItem(itemx);
   }

   const todoItemDateUpdateHandler = (newDate:Date, id:number) =>{
    var itemx = todoItemsList.find((x:TodoItem) => x.id ===id )?? null
    
        if(itemx){
            itemx.dueDate = newDate;
            const allCategory:Category[] = [{
                id:0,
                title:"string"
            }];
            itemx.categories = allCategory;
        }
    
    uptateTodoItem(itemx);

   }

    const uptateTodoItem = (item:TodoItem | null) =>{
        if(item){
            TodoItemApiService.updateTodoItem(item?.id ?? 0, item)
            .then((response:any) =>{
                retrieveTodoItems();         
                
            })
            .catch((e:Error) =>{
                console.log(e);
            })
        }
    }
    
    const retrieveTodoItems = () =>{
        TodoItemApiService.getTodoItems()
            .then((response:any) =>{                
                setTodoItemsList(response.data);                        
            })
            .catch((e:Error) =>{
                console.log(e);
            })
    }

    const DeleteActionClickHandler = (id:number)=>{
        TodoItemApiService.deleteTodoItem(id)
            .then((response:any) =>{                
                retrieveTodoItems(); 
            })
            .catch((e:Error) =>{
                console.log(e);
            })
    }

    const insertNewTask =() =>{
        const allCategory:Category[] = [{
            id:0,
            title:"string"
        }];
        const  newTodoItem:TodoItem = {
            description: newEntry,
            isDone:false,      
            categories:allCategory
        }

        TodoItemApiService.postTodoItem(newTodoItem)
        .then((response:any) =>{
            retrieveTodoItems();                        
        })
        .catch((e:Error) =>{
            console.log(e);
            messageApi.open({
                type: 'error',
                content: 'Error Adding Task',
                duration: 3,
              });     
            
        })       
        setInsertMode(false);
       
    }

    const newTaskInnputShow = () =>{
        if(insertMode){
            return(
                <>
                <div>
                    <Space.Compact className="new-input">
                         <Input placeholder="New Task Here" 
                            onChange={handleInpurChange}
                            value={newEntry}
                         />
                        <Button 
                             onClick= {() => insertNewTask()}
                            icon=<CheckCircleOutlined />
                        ></Button>
                        <Button
                            onClick= {() => setInsertMode(false)}
                            icon = <CloseCircleOutlined />                            
                        >                        
                        </Button>
                    </Space.Compact>     
                </div>
                <div className="hspacer"></div>
                </>
            )
        }
        else
        {
            return(<></>);
        }

    } 
    
    return(
        <>
            <div ref={container as unknown as LegacyRef<HTMLDivElement>}>
                <div>
                {newTaskInnputShow()}
                </div>
                <ItemList 
                    todoItemArray={todoItemsList}
                    todoItemStateClickHandler = {todoItemStateClickHandler}                             
                    UpdateTextClickHandler = {UpdateTextClickHandler}                    
                    todoItemDateUpdateHandler =   {todoItemDateUpdateHandler}
                    DeleteActionClickHandler = {DeleteActionClickHandler}                                        
                ></ItemList>
                <FloatButton onClick={() => setInsertMode(true)} 
                    target={container.current as unknown as HTMLAttributeAnchorTarget                  
                    }
                    tooltip= {"New Todo Item"}
                    icon= <FileAddTwoTone></FileAddTwoTone>
                    />
            </div>
        </>
    );
} 

export default TodoAppFi;
