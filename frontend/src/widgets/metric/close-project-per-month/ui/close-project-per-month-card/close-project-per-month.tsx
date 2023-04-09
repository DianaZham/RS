import React, {FC} from 'react'
import {IconMetricCard} from '../../../../../entities/metric'
import {AiOutlineWarning} from 'react-icons/ai'

const CloseProjectPerMonth: FC = () => {
    return (
        <IconMetricCard
            title="Проекты с истекшим сроком решения:"
            metric={1}
            color="rgb(236, 125, 91)"
            icon={<AiOutlineWarning size={32}/>}
        />
    )
}

CloseProjectPerMonth.displayName = 'CloseProjectPerMonth'

export default CloseProjectPerMonth
