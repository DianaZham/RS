import React, {FC} from 'react'
import {IconMetricCard} from '../../../../../entities/metric'
import {BsClockHistory} from 'react-icons/bs'

const ProjectInPendingCard: FC = () => {
    return (
        <IconMetricCard
            title="Проекты в ожидании:"
            metric={10}
            color="rgb(255, 241, 189)"
            icon={<BsClockHistory size={32}/>}
        />
    )
}

ProjectInPendingCard.displayName = 'ProjectInPendingCard'

export default ProjectInPendingCard
