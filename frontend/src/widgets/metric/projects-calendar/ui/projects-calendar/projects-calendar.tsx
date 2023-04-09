import React, {FC} from 'react'
import {Box, Calendar} from '../../../../../share'

const ProjectsCalendar: FC = () => {
    return (
        <Box $color="rgb(255 255 255)">
            <Calendar
                events={[]}
            />
        </Box>
    )
}

ProjectsCalendar.displayName = 'ProjectsCalendar'

export default ProjectsCalendar
