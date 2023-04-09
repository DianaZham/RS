import React, {FC} from 'react'
import {IconMetricCard} from '../../../../../entities/metric'
import {SiProgress} from 'react-icons/si'

const ProjectsInProgressCard: FC = () => {
    return (
        <IconMetricCard
            icon={<SiProgress size={32}/>}
            color="rgb(181, 180, 255)"
            title={'Проекты в стадии принятия решения'}
            metric={10}
        />
    )
}

ProjectsInProgressCard.displayName = 'ProjectsInProgressCard'

export default ProjectsInProgressCard
