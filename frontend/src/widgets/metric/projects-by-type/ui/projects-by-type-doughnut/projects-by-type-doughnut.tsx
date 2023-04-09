/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {FC} from 'react'
import 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'
import {DiagramMetricCard} from '../../../../../entities/metric'
import {ChartData} from 'chart.js'

export const data: ChartData<'doughnut', number[], unknown> = {
    labels: ['Памятники', 'Незаконная застройка', 'Аварийное жилье', 'Имеющих историческую ценность'],
    datasets: [
        {
            label: '# of Votes',
            data: [10, 7, 24, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

const ProjectsByTypeDoughnut: FC = () => {
    
    return <DiagramMetricCard
        title="Доля объектов по типу:"
        color="rgb(234 245 215)"
        diagram={<Doughnut data={data} options={{
            color: 'black',
            font: {
                family: 'Nunito-Sans',
            },
            aspectRatio: 1,
            plugins: {
                legend: {
                    align: 'start',
                },
            },
        }}/>}
    />
}

ProjectsByTypeDoughnut.displayName = 'ProjectsByTypeDoughnut'

export default ProjectsByTypeDoughnut
