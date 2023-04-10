import React, {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {Box} from '../../../../../share'
import {StyledProjectMapCardList, StyledProjectsMap} from './styled'
import {ProjectCard} from '../../../../../entities/project'
import {Path, withoutSlug} from '../../../../../app/routes'

type Project = {
    id: number
    vnutrinii_nomer: string
    status: string
    otvestveni: string
    data_ispolnenia_po_resheniyu: string
}

type Response = {
    id: number
    proekti: Project[]
}

type Point = {
    id: number
    lat: number
    lon: number
}

const ProjectsMap: FC = () => {
    const navigate = useNavigate()
    const [points, setPoints] = useState<Point[]>([])
    const [projects, setProjects] = useState<Project[]>([])
    
    const pointClickHandler = (id: number) => {
        (async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/adresa/dom/${id}`)
            const data = await response.json() as Response
            console.log(data)
            setProjects(data.proekti)
        })()
    }
    
    const projectClickHandler = (id: number) => {
        navigate(`/${withoutSlug(Path.Project)}/${id}`)
    }
    
    useEffect(() => {
        (async () => {
            const response = await fetch('http://127.0.0.1:8000/api/adresa/dom/')
            const data = await response.json() as Point[]
            setPoints(data)
        })()
        
    }, [])
    
    return (
        <Box $color="rgb(255, 255, 245)">
            <StyledProjectsMap
                zoom={10}
                center={{
                    id: 1,
                    lat: 55.818557,
                    lon: 37.5080428,
                }}
                objectPoints={points.map(point => ({
                    ...point,
                    onPointClick: pointClickHandler
                }))}
            >
                <StyledProjectMapCardList>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            number={project.vnutrinii_nomer}
                            status={project.status}
                            accountable={project.otvestveni}
                            controlDate={project.data_ispolnenia_po_resheniyu}
                            onClick={() => projectClickHandler(project.id)}
                        />
                    ))}
                </StyledProjectMapCardList>
            </StyledProjectsMap>
        </Box>
    )
}

ProjectsMap.displayName = 'ProjectsMap'

export default ProjectsMap
