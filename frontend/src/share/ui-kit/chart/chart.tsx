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

type ChartProps = {
	type: 'bar'| 'line',
    name?: string | null,
    labels: string[],
    datasets: Dataset[],
}

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
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    font: {
                        size: 14,
                        family: 'Nunito-Sans',
                        weight: 'medium'
                    },
                    padding: 20
                },
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
        return <Bar options={options} data={data}/>
    case 'line': 
        return <Line options={options} data={data} />
    }

}

Chart.displayName = 'Chart'
export default Chart