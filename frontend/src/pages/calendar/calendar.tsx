import React, {FC} from 'react'
import {ProjectInPendingCard} from '../../widgets/project-in-pending'
import {CloseProjectPerMonth} from '../../widgets/close-project-per-month'
import {DeadlineProject, NextProjectsDeadlineList} from '../../widgets/deadline-project'
import {ProjectsByTypeDoughnut} from '../../widgets/projects-by-type'
import {ProjectsInProgressCard} from '../../widgets/projects-in-progress'
import {LastProjectsList} from '../../widgets/last-projects'
import {StyledPageRow, StyledPageWrapper} from '../styled'
import ProjectsCalendar from '../../widgets/projects-calendar/ui/projects-calendar/projects-calendar'

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
