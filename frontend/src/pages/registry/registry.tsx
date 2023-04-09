import React, {FC} from 'react'
import {ProjectInPendingCard} from '../../widgets/project-in-pending'
import {CloseProjectPerMonth} from '../../widgets/close-project-per-month'
import {DeadlineProject} from '../../widgets/deadline-project'
import {ProjectsByTypeDoughnut, ProjectsByTypeList} from '../../widgets/projects-by-type'
import {ProjectsInProgressCard} from '../../widgets/projects-in-progress'
import {LastProjectsList} from '../../widgets/last-projects'
import {ProjectsRegistryTable} from '../../widgets/projects-registry'
import {StyledPageRow, StyledPageWrapper} from '../styled'

const RegistryPage: FC = () => (
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
            <ProjectsRegistryTable/>
        </StyledPageRow>
    </StyledPageWrapper>
)

RegistryPage.displayName = 'RegistryPage'

export default RegistryPage
