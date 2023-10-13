import React from 'react';
import type { Dayjs } from 'dayjs';

import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import { DatePickerProps } from '../../Models/DatePickerProps';

export function DatePicker(props:DatePickerProps)
{
    const onSelect = (date: Dayjs, selectInfo:any ) => {
        props.todoItemDateUpdateHandler && props.todoItemDateUpdateHandler(date.toDate())
      };
    const { token } = theme.useToken();
    const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
      };
    
      return (
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onSelect={onSelect}  className='calendar-style'/>        
        </div>
      );

}





export default DatePicker;