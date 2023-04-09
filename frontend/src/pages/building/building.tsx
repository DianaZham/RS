import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {StyledBuildingPage} from './styled'

const BuildingPage: FC = () => {
    const {id} = useParams()
    
    return (
        <StyledBuildingPage>
        
        </StyledBuildingPage>
    )
}

BuildingPage.displayName = 'BuildingPage'

export default BuildingPage
