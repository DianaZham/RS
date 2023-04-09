import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {StyledProjectPage} from './styled'

const ProjectPage: FC = () => {
    const {id} = useParams()
    
    return (
        <StyledProjectPage>
            Project page
        </StyledProjectPage>
    )
}

ProjectPage.displayName = 'ProjectPage'

export default ProjectPage
