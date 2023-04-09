import React, {FC} from 'react'
import { Chart } from '../../../../../share/ui-kit/chart'
import { ChartProps } from '../../../../../share/ui-kit/chart/chart'
import { DiagramMetricCard } from '../../../../../entities/metric'

export const {name, type, labels, datasets}: ChartProps = {
    name: 'Количество принятых решений за последний месяц',
    type: 'bar',
    labels: ['Снос', 'Реставрация', 'Заморозка'],
    datasets: [
        {
            label: 'Памятники',
            data: [1, 2, 4],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Незаконная застройка',
            data: [6, 0, 1],
            borderColor: 'rgba(54, 162, 235, 1',
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        },
        {
            label: 'Аварийное жилье',
            data: [2, 3, 0],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)'
        },
        {
            label: 'Имеющих историческую ценность',
            data: [0, 5, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        },
    ]
}

const DecisionPerLastMonth: FC = () => {
    return <DiagramMetricCard
        diagram={<Chart type={type} labels={labels} datasets={datasets}/>}
        title={name}
        color='rgb(162, 222, 213)'
    />
}

DecisionPerLastMonth.displayName = 'DecisionPerLastMonth'

export default DecisionPerLastMonth
