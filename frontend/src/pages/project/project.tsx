import React, {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {StyledProjectPage} from './styled'
import {getProjectById, ProjectDetail} from '../../entities/project'
import {RegistryProject} from '../../widgets/registry/types'
import {toRegistryProject} from '../../widgets/registry/model'
import {deleteProject} from '../../entities/project/api'
import {updateProject} from '../../entities/project/api/patch-project-by-id'

const ProjectPage: FC = () => {
    const {id} = useParams()
    const [project, setProject] = useState<RegistryProject>()
    
    const deleteHandler = () => {
        id && deleteProject(id)
    }
    
    const updateHandler = (ref: React.MutableRefObject<HTMLFormElement | null>) => {
        if (ref.current && id) {
            const formData = new FormData(ref.current)
            updateProject(id, formData)
        }
    }
    
    useEffect(() => {
        (async () => {
            const data = await getProjectById(id || 1)
            setProject(toRegistryProject(data))
        })()
    }, [])
    
    return (
        <StyledProjectPage>
            {project && <ProjectDetail
                project={project}
                onClickDelete={deleteHandler}
                onClickUpdate={updateHandler}
            />}
        </StyledProjectPage>
    )
}

ProjectPage.displayName = 'ProjectPage'

export default ProjectPage
