import React, {FC} from 'react'
import {momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import {ruFormats} from './ru-formats'
import {ruMessages} from './ru-messages'
import {StyledCalendar} from './styled'

export type EventCalendar = {
    start: Date
    end: Date,
    title: string,
}

type CalendarProps = {
    events: EventCalendar[]
}

const isEvent = (event: object): event is EventCalendar => {
    if ( ('start' in event) && ('end' in event)  && ('title' in event)) return true
    throw new Error('Events for calendar should have type Event')
}

const eventAcceccor = (event: object, prop: 'start' | 'end' ) => {
    try {
        isEvent(event)
        return event[prop  as keyof typeof event]
    } catch(e) {
        throw new Error('Events for calendar should have type Event')
    }
    // if (!isEvent(event)) throw new Error('Events for calendar should have type Event')
    // return event[prop  as keyof typeof event]
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
