import React, {FC} from 'react'
import {MetricList} from '../../../../../entities/metric'

const NextProjectsDeadlineList: FC = () => {
    return (
        <MetricList
            title="Ближайшие осмотры:"
            metrics={[
                {title: <><span>#898934</span><span>ул.Бабушкина 32</span></>, value: '10.04.13'},
                {title: <><span>#898934</span><span>ул.Бабушкина 32</span></>, value: '10.04.13'},
                {title: <><span>#898934</span><span>ул.Бабушкина 32</span></>, value: '10.04.13'},
                {title: <><span>#898934</span><span>ул.Бабушкина 32</span></>, value: '10.04.13'},
            ]}
            color="rgb(228, 183, 223)"
        />
    )
}

NextProjectsDeadlineList.displayName = 'NextProjectsDeadlineList'

export default NextProjectsDeadlineList
