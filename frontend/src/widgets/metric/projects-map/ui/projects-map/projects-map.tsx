import React, {FC} from 'react'
import {Box} from '../../../../../share'
import {StyledProjectMapCardList, StyledProjectsMap} from './styled'
import {ProjectCard} from '../../../../../entities/project'
import {useNavigate} from 'react-router-dom'

const projects: { id: number, typeObject: string, square: number, status: 'new' | 'progress' | 'completed' }[] = [
    {id: 1, typeObject: 'Памятник', square: 412, status: 'new'},
    {id: 2, typeObject: 'Памятник', square: 512, status: 'progress'},
    {id: 3, typeObject: 'Памятник', square: 413, status: 'completed'},
    {id: 4, typeObject: 'Памятник', square: 745, status: 'new'},
    {id: 5, typeObject: 'Памятник', square: 154, status: 'new'},
]

const ProjectsMap: FC = () => {

    const navigate = useNavigate()

    return (
        <Box $color="rgb(255, 255, 245)">
            <StyledProjectsMap
                zoom={10}
                center={{
                    lat: 30,
                    lon: 30
                }}
                objectPoints={[{
                    lon: 30,
                    lat: 30
                }]}
            >
                <StyledProjectMapCardList>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            typeObject={project.typeObject}
                            square={project.square}
                            status={project.status}
                        />
                    ))}
                </StyledProjectMapCardList>
            </StyledProjectsMap>
        </Box>
    )
}

ProjectsMap.displayName = 'ProjectsMap'

export default ProjectsMap
