import React, {FC} from 'react'
import {MetricList} from '../../../../entities/metric'

const LastProjectsList: FC = () => {
    return <MetricList
        title="Последние проекты / Дата согсласования"
        metrics={[
            {title: '#0990929', value: '31.11.1997'},
            {title: '#7812393', value: '01.12.1997'},
            {title: '#8928399', value: '04.12.1997'},
            {title: '#9811240', value: '05.12.1997'},
            {title: '#9149392', value: '09.12.1997'},
            {title: '#1238839', value: '17.12.1997'},
        ]}
        color="rgb(193 233 227)"
    />
}

LastProjectsList.displayName = 'LastProjectsList'

export default LastProjectsList
