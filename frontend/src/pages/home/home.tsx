import React, {FC} from 'react'
import {Breadcrumbs, Calendar, Link, Map, Tab, Tabs, Text} from '../../share'
import {Path} from '../../app'

const HomePage: FC = () => (
    <div>
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
