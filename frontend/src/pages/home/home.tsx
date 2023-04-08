import React, {FC} from 'react'
import {Breadcrumbs, Calendar, Link, Map, Tab, Tabs, Text, Button, Input, LineChart} from '../../share'
import {Path} from '../../app'

const data = {
    name: 'Любое имя диаграммы',
    dataArray: [
        {
            label: 'месяц 1',
            value: 13
        },
        {
            label: 'месяц 2',
            value: 24
        },
        {
            label: 'месяц 3',
            value: 17
        },
        {
            label: 'месяц 4',
            value: 19
        },
    ]
}

const name = 'Любое имя диаграммы'
const labels = ['месяц 1', 'месяц 2', 'месяц 3', 'месяц 4', ]
const datasets = [
    {
        label: 'Данные 1',
        data: [13, 15, 26, 10],
        borderColor: '#32a852',
        backgroundColor: '#1c6b31'
    },
    {
        label: 'Данные 1',
        data: [19, 22, 20, 8],
        borderColor: '#e012be',
        backgroundColor: '#6b1c5e'
    },
]

const HomePage: FC = () => (
    <div>
        <LineChart name={name} labels={labels} datasets={datasets}/>
        <Text $size="small">HomePage И что то на русском</Text>
        <Tabs>
            <Tab label="First">I think</Tab>
            <Tab label="Second">May be</Tab>
            <Tab label="Tertiary">Im stupid</Tab>
        </Tabs>
        <Breadcrumbs>
            <Link to={Path.Home}>Home</Link>
            <Link to={Path.Other}>Other</Link>
        </Breadcrumbs>
        <Calendar/>
        <Map lat={113.5} lon={52.03} zoom={9}/>
    </div>
)

HomePage.displayName = 'HomePage'

export default HomePage
