import React, {FC} from 'react'
import { Chart } from '../../../../../share/ui-kit/chart'
import { ChartProps } from '../../../../../share/ui-kit/chart/chart'
import { DiagramMetricCard } from '../../../../../entities/metric'

export const {name, type, labels, datasets}: ChartProps = {
    name: 'Доля объектов, поступивших за последние месяцы',
    type: 'line',
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', ],
    datasets: [
        {
            label: 'Памятники',
            data: [14, 20, 19, 11, 15, 14],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Незаконная застройка',
            data: [15, 16, 11, 15, 10, 5],
            borderColor: 'rgba(54, 162, 235, 1',
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        },
        {
            label: 'Аварийное жилье',
            data: [16, 15, 17, 22, 21, 15],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)'
        },
        {
            label: 'Имеющих историческую ценность',
            data: [15, 9, 21, 15, 23, 15],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        },
    ]
}

const ProjectsInProgressPerMonth: FC = () => {
    return <DiagramMetricCard
        diagram={<Chart type={type} labels={labels} datasets={datasets}/>}
        title={name}
        color='rgb(162, 222, 213)'
    />
}

ProjectsInProgressPerMonth.displayName = 'ProjectsInProgressPerMonth'

export default ProjectsInProgressPerMonth
