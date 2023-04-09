import React, {FC} from 'react'
import {momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {ruFormats} from './ru-formats'
import {ruMessages} from './ru-messages'
import {StyledCalendar} from './styled'

type Event = {
    start: Date
    end: Date
}

type CalendarProps = {
    events: Event[]
}

const isEvent = (event: object): event is Event => {
    return ('start' in event) && ('end' in event)
}

const eventAcceccor = (event: object, prop: 'start' | 'end') => {
    if (!isEvent(event)) throw new Error('Events for calendar should have type Event')
    return event[prop]
}

const Calendar: FC<CalendarProps> = ({events}) =>
    <StyledCalendar
        localizer={momentLocalizer(moment)}
        style={{height: 500}}
        messages={ruMessages}
        formats={ruFormats}
        events={events}
        startAccessor={(event) => eventAcceccor(event, 'start')}
        endAccessor={(event) => eventAcceccor(event, 'end')}
    />

Calendar.displayName = 'Calendar'

export default Calendar
