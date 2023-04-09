import React, {FC} from 'react'
import {IconMetricCard} from '../../../../../entities/metric'
import {BsCheck2All} from 'react-icons/bs'

const DeadlineProject: FC = () => {
    return (
        <IconMetricCard
            title="Закрыто проектов за последний месяц:"
            metric={5}
            color="rgb(80, 221, 91)"
            icon={<BsCheck2All size={32}/>}
        />
    )
}

DeadlineProject.displayName = 'DeadlineProject'

export default DeadlineProject
