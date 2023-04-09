import React, {FC} from 'react'
import {ProjectInPendingCard} from '../../widgets/project-in-pending'
import {CloseProjectPerMonth} from '../../widgets/close-project-per-month'
import {DeadlineProject} from '../../widgets/deadline-project'
import {ProjectsByTypeDoughnut, ProjectsByTypeList} from '../../widgets/projects-by-type'
import {ProjectsInProgressCard} from '../../widgets/projects-in-progress'
import {LastProjectsList} from '../../widgets/last-projects'
import {StyledPageRow, StyledPageWrapper} from '../styled'
import {ProjectsMap} from '../../widgets/projects-map'

const MapPage: FC = () => (
    <StyledPageWrapper>
        <StyledPageRow>
            <ProjectInPendingCard/>
            <CloseProjectPerMonth/>
            <DeadlineProject/>
            <ProjectsInProgressCard/>
        </StyledPageRow>
        <StyledPageRow>
            <ProjectsByTypeList/>
            <ProjectsByTypeDoughnut/>
            <LastProjectsList/>
        </StyledPageRow>
        <StyledPageRow>
            <ProjectsMap/>
        </StyledPageRow>
    </StyledPageWrapper>
)

MapPage.displayName = 'MapPage'

export default MapPage
