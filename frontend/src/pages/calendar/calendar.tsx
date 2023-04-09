import React, {FC} from 'react'
import {ProjectInPendingCard} from '../../widgets/project-in-pending'
import {CloseProjectPerMonth} from '../../widgets/close-project-per-month'
import {DeadlineProject, NextProjectsDeadlineList} from '../../widgets/deadline-project'
import {ProjectsByTypeDoughnut} from '../../widgets/projects-by-type'
import {ProjectsInProgressCard} from '../../widgets/projects-in-progress'
import {LastProjectsList} from '../../widgets/last-projects'
import {StyledPageRow, StyledPageWrapper} from '../styled'
import ProjectsCalendar from '../../widgets/projects-calendar/ui/projects-calendar/projects-calendar'
import { ProjectsInProgressPerMonth } from '../../widgets/project-in-progress-per-month'
import { DecisionPerLastMonth } from '../../widgets/decision-per-last-month'

const CalendarPage: FC = () => (
    <StyledPageWrapper>
        <StyledPageRow>
            <ProjectInPendingCard/>
            <CloseProjectPerMonth/>
            <DeadlineProject/>
            <ProjectsInProgressCard/>
        </StyledPageRow>

        <StyledPageRow>
            <ProjectsInProgressPerMonth/>
            <ProjectsByTypeDoughnut/>
            <DecisionPerLastMonth/>
        </StyledPageRow>

        <StyledPageRow>
            <ProjectsCalendar/>
        </StyledPageRow>
    </StyledPageWrapper>
)

CalendarPage.displayName = 'CalendarPage'

export default CalendarPage
