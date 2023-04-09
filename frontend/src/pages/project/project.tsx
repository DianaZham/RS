import React, {FC} from 'react'
import {useParams} from 'react-router-dom'
import {StyledProjectPage} from './styled'
import {ProjectDetail} from '../../entities/project'

//TODO: ДОБАВИТЬ API

const ProjectPage: FC = () => {
    const {id} = useParams()
    
    return (
        <StyledProjectPage>
            <ProjectDetail project={{
                id: 1,
                buildings: [],
                constructionArea: ['123', '123'],
                status: 'Завершен',
                accountable: ['123', '123'],
                nextControlDate: '2023-11-29',
                businessNumber: '1232131'
            }}
            onClickDelete={() => console.log(123)}
            onClickUpdate={() => console.log(123)}
            
            />
        </StyledProjectPage>
    )
}

ProjectPage.displayName = 'ProjectPage'

export default ProjectPage
