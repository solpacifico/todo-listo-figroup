

export interface DatePickerProps
{
    currentDate?:Date;

    todoItemDateUpdateHandler?:( date:Date)=> void;

    isEditMode?:boolean;
}