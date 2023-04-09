import React, {FC} from 'react'
import {Box, Calendar} from '../../../../../share'

const ProjectsCalendar: FC = () => {
    return (
        <Box $color="rgb(255 255 255)">
            <Calendar
                events={[{
                    end: new Date(2023, 3, 22, 11, 0),
                    start: new Date(2023, 3, 22, 10,0),
                    title:'Тест'
                }]}
            />
        </Box>
    )
}

ProjectsCalendar.displayName = 'ProjectsCalendar'

export default ProjectsCalendar
