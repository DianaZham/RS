import React, { FC } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

type Dataset = {
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string
}

type LineChartProps = {
    name: string,
    labels: string[],
    datasets: Dataset[]
}

const LineChart: FC<LineChartProps> = ({name, datasets, labels}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: name,
            },
        },
    }
    
    
    const data = {
        labels,
        datasets,
    }

    return <Line options={options} data={data} />
}

export default LineChart