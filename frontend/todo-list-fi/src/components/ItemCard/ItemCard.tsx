import {  Card, Checkbox, Skeleton, Input,Space,Typography, Button  } from 'antd';
import { DatePicker } from '../DatePicker/DatePicker';
import { ItemCardProps } from '../../Models/ItemCardProps';
import "./ItemCard.css";
import { CheckCircleOutlined , CloseCircleOutlined, CalendarOutlined,DeleteOutlined} from '@ant-design/icons';
import React from 'react';
import dayjs from 'dayjs';

/**
 * 
 * @param props 
 * @returns 
 */
const { Meta } = Card;
const { Text, Link } = Typography;

const checktyle: React.CSSProperties = {       
        
    marginTop: "4px",
    display:"inline-flex",
    width:"300px"
  };


  const cardsgrid1: React.CSSProperties = {      
    width:"100%",
    padding:"5px",
    display:"inline-flex",
    verticalAlign:"center",
    justifyContent:"space-between"
  };

  const cardstyle: React.CSSProperties = {       
            
    width:"400px",
    padding:"5px"
  };

class  ItemCard extends React.Component<any,ItemCardProps> {
    constructor(props:ItemCardProps){
        super(props)
        this.state ={
            todoItemData:this.props.todoItemData,
            isLoading:this.props.isLoading,
            isDescriptionEdit:this.props.isDescriptionEdit,
            isDateEdit:this.props.isDateEdit,
            descriptionInput:this.props.descriptionInput
        };
        this.todoItemDescriptionClickHandler = this.todoItemDescriptionClickHandler.bind(this);
        this.CancelActionClickHandler = this.CancelActionClickHandler.bind(this);
        this.InputChangeHandler = this.InputChangeHandler.bind(this);
        this.UpdateTextClickHandler = this.UpdateTextClickHandler.bind(this);
        this.todoItemDateClickHandler =  this.todoItemDateClickHandler.bind(this);
        this.todoItemDateUpdateHandler =  this.todoItemDateUpdateHandler.bind(this);
        this.DeleteActionClickHandler= this.DeleteActionClickHandler.bind(this);
       
    }

    DeleteActionClickHandler = (id:number) =>{        
        this.props.DeleteActionClickHandler(id);
    }

    todoItemDateUpdateHandler = (newDate:any, id:number) => {
        
        this.props.todoItemDateUpdateHandler(newDate, id);
        this.setState( {
            isDateEdit:false
        } )
    } 
    
    
    todoItemDescriptionClickHandler()  {       
        this.setState({
                isDescriptionEdit:true
            }
        )        
    }
    

    InputChangeHandler = (s:string) =>{
        this.setState( {
                descriptionInput:s
            }
        )
    }

    CancelActionClickHandler =() =>{
        this.setState( {
            isDescriptionEdit:false,
            isDateEdit:false
        } );
    }

    todoItemDateClickHandler =() => {
        
        this.setState( {
            isDateEdit:true
        } )
    }

    UpdateTextClickHandler = (description:string, id:number) =>{
        
        this.props.UpdateTextClickHandler(description, id);
        this.setState( {
            isDescriptionEdit:false
        } );
    }

   

    TaskDescritiptionUpdater = (insertMode:boolean, description:string) =>{        
        if(insertMode){
            return(
                <>
                <div>
                    <Space.Compact className="new-input-description">
                         <Input  
                            onChange={(e:any) => this.InputChangeHandler(e.target.value)}
                            defaultValue={description}
                         />
                        <Button                              
                            icon=<CheckCircleOutlined/>
                            onClick= {(e) => this.UpdateTextClickHandler(this.state.descriptionInput ?? "",this.props.todoItemData?.id)}                            
                            
                            
                        ></Button>
                        <Button
                            onClick= {this.CancelActionClickHandler}
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

    DateView = (dateStr:string) => {
        if(dateStr ==='0001-01-01T00:00:00'){
            return(
                <Button                              
                    icon= <CalendarOutlined/>
                    onClick={ this.todoItemDateClickHandler }                           
                                              
                ></Button>
            );
        }
        else
        {
            return(
                <Text className='date-text'
                    onClick={ this.todoItemDateClickHandler }>
                    {"Due: " + dayjs(this.props?.todoItemData?.dueDate).format("DD/MM/YY")}
                </Text>
            );
        }

    }

   
    render(){
        return (
            
            <>
            
            
            <Card
                style={cardstyle}                
            >
                <Skeleton loading={this.props.isLoading} avatar active>
                <Card.Grid style={cardsgrid1}>
                <div style={checktyle}>
                    <Checkbox 
                        onChange={(e) => this.props.todoItemStateClickHandler 
                        && this.props.todoItemStateClickHandler(e.target.checked ?? false, this.props.todoItemData?.id ?? 0)} 
                        checked={this.props.todoItemData?.isDone}>                    
                    
                    </Checkbox>
                <div className="spacer"></div>
                {this.state.isDescriptionEdit
                        ? this.TaskDescritiptionUpdater(this.state.isDescriptionEdit, this.props.todoItemData?.description) 
                        :<Text onClick={this.todoItemDescriptionClickHandler}>
                            {this.props.todoItemData?.description}
                        </Text>}
                </div>

                </Card.Grid>
            
                <Card.Grid style={cardsgrid1}>
                <div>
                {this.state.isDateEdit 
                    ?
                    <>
                        <DatePicker
                            todoItemDateUpdateHandler={(s:any)=> this.todoItemDateUpdateHandler(s, this.props.todoItemData?.id)}
                        /> 
                        <Button                              
                            icon=<CheckCircleOutlined/>
                            onClick= {(e) => this.UpdateTextClickHandler(this.state.descriptionInput ?? "",this.props.todoItemData?.id)}                                                 
                        ></Button>
                        <Button
                            onClick= {this.CancelActionClickHandler}
                            icon = <CloseCircleOutlined />                            
                        ></Button>


                    </>
                    :this.DateView(this.props.todoItemData.dueDate.toString())        
                        
                }
                </div>
                <div className="spacer"></div>
                <Button
                    onClick= {(e)=>this.DeleteActionClickHandler(this.props.todoItemData?.id ?? 0)}
                    icon = <DeleteOutlined />                            
                ></Button>
                </Card.Grid>

                
                
                </Skeleton>
            </Card>
            </>
        );
    }
}
export default ItemCard;

