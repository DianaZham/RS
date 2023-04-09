import React, { FC } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

type Dataset = {
    label: string,
    data: number[],
    borderColor?: string,
    backgroundColor: string
}

export type ChartProps = {
	type: 'bar'| 'line',
    name?: string | null,
    labels: string[],
    datasets: Dataset[],
}

type start = 'start'

const Chart: FC<ChartProps> = ({name, datasets, labels, type}) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        Title,
        Tooltip,
        Legend
    )
    const start: start = 'start'
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        color: 'black',
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 12,
                        family: 'Nunito-Sans',
                        weight: 'medium',
                    },
                },
                align: start
            },
            title: {
                display: name ? true : false,
                text: name ? name : '',
                font: {
                    size: 18,
                    family: 'Nunito-Sans',
                    weight: 'Bold'
                }
            },
        },
    }
    
    
    const data = {
        labels,
        datasets,
    }

    switch (type) {
    case 'bar':
        return <Bar height={300} options={options} data={data}/>
    case 'line': 
        return <Line height={300} options={options} data={data} />
    }

}

Chart.displayName = 'Chart'
export default Chart