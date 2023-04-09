import React, {FC} from 'react'
import {Text} from '../../../../share'
import {StyledProjectCard} from './styled'

type Status = 'progress' | 'new' | 'completed'

type ProjectCardProps = {
    typeObject: string
    square: number
    status: Status
    onClick?: () => void
}

const colorsByStatus = {
    completed: '#ff000042',
    new: '#d6d6ff9c',
    progress: '#00d6002e',
}

const textByStatus: { [key in Status]: string } = {
    new: 'Новый',
    progress: 'В работе',
    completed: 'Завершен'
}

const ProjectCard: FC<ProjectCardProps> = ({
    square,
    status,
    typeObject,
    onClick
}) => {

    return (
        <StyledProjectCard $color={colorsByStatus[status]} onClick={onClick}>
            <Text>{typeObject}</Text>
            <Text>{square}</Text>
            <Text>{textByStatus[status]}</Text>
        </StyledProjectCard>
    )
}

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
