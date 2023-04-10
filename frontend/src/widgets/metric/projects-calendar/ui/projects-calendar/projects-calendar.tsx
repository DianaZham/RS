import React, {FC, useEffect, useState} from 'react'
import {Box, Calendar} from '../../../../../share'
import {EventCalendar} from '../../../../../share/ui-kit/calendar/calendar'

const ProjectsCalendar: FC = () => {
    const [state, setState] = useState<EventCalendar[]>([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/proekti/kalendar/')
            const data = await response.json() as EventCalendar[]
            data.forEach((item)=>{
                item.start = new Date(item.start)
                item.end = new Date(item.end)
            })
            setState(data)
        }

        void fetchData()

    }, [])

    return (
        <Box $color="rgb(255 255 255)">
            <Calendar
                events={state}
            />
        </Box>
    )
}

ProjectsCalendar.displayName = 'ProjectsCalendar'

export default ProjectsCalendar
