import React, {FC} from 'react'
import {
    CloseProjectPerMonth,
    DeadlineProject,
    LastProjectsList,
    ProjectInPendingCard,
    ProjectsByTypeDoughnut,
    ProjectsByTypeList,
    ProjectsInProgressCard,
    ProjectsRegistryTable
} from '../../widgets/metric'
import {StyledPageRow, StyledPageWrapper} from '../styled'
import {RegistryTable} from '../../widgets/registry'

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
            <RegistryTable/>
        </StyledPageRow>
    
    </StyledPageWrapper>
)

RegistryPage.displayName = 'RegistryPage'

export default RegistryPage
