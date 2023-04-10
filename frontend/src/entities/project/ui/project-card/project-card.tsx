import React, {FC} from 'react'
import {Text} from '../../../../share'
import {StyledProjectCard} from './styled'
import {useNavigate} from 'react-router-dom'


type ProjectCardProps = {
    number: string
    controlDate: string
    status: string
    accountable: string
    onClick?: () => void
}

const ProjectCard: FC<ProjectCardProps> = ({
    number,
    status,
    controlDate,
    accountable,
    onClick
}) => {
    return (
        <StyledProjectCard $color={'white'} onClick={onClick}>
            <Text>{number}</Text>
            <Text>{controlDate}</Text>
            <Text>{accountable}</Text>
            <Text>{status}</Text>
        </StyledProjectCard>
    )
}

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
