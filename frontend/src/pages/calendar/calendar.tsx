import React, {FC} from 'react'
import {
    CloseProjectPerMonth,
    DeadlineProject,
    LastProjectsList,
    NextProjectsDeadlineList,
    ProjectInPendingCard,
    ProjectsByTypeDoughnut,
    ProjectsCalendar,
    ProjectsInProgressCard
} from '../../widgets/metric'

import {StyledPageRow, StyledPageWrapper} from '../styled'

const CalendarPage: FC = () => (
    <StyledPageWrapper>
        <StyledPageRow>
            <ProjectInPendingCard/>
            <CloseProjectPerMonth/>
            <DeadlineProject/>
            <ProjectsInProgressCard/>
        </StyledPageRow>
        
        <StyledPageRow>
            <LastProjectsList/>
            <ProjectsByTypeDoughnut/>
            <NextProjectsDeadlineList/>
        </StyledPageRow>
        
        <StyledPageRow>
            <ProjectsCalendar/>
        </StyledPageRow>
    </StyledPageWrapper>
)

CalendarPage.displayName = 'CalendarPage'

export default CalendarPage
