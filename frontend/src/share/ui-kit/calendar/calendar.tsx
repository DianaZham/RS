import React, {FC} from 'react'
import {momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {ruFormats} from './ru-formats'
import {ruMessages} from './ru-messages'
import {StyledCalendar} from './styled'

const Calendar: FC = () => {
    return <StyledCalendar
        localizer={momentLocalizer(moment)}
        style={{height: 500}}
        messages={ruMessages}
        formats={ruFormats}
    />
}

Calendar.displayName = 'Calendar'

export default Calendar
