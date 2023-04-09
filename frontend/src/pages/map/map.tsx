import React, {FC} from 'react'
import {
    CloseProjectPerMonth,
    DeadlineProject,
    LastProjectsList,
    ProjectInPendingCard,
    ProjectsByTypeDoughnut,
    ProjectsByTypeList,
    ProjectsInProgressCard,
    ProjectsMap
} from '../../widgets/metric'

import {StyledPageRow, StyledPageWrapper} from '../styled'


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
