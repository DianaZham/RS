import React, {FC} from 'react'
import {Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {ruFormats} from './ru-formats'
import {ruMessages} from './ru-messages'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const Calendar: FC = () => {
    return <BigCalendar
        localizer={momentLocalizer(moment)}
        style={{height: 500}}
        messages={ruMessages}
        formats={ruFormats}
    />
}

Calendar.displayName = 'Calendar'

export default Calendar
