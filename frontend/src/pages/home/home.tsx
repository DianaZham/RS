import React, {FC} from 'react'
import {Breadcrumbs, Calendar, Link, Map, Tab, Tabs, Text, Button, VideoPlayer, Alert, Chart, Modal} from '../../share'
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
        <Map center={{lat: 55.5, lon: 37}} coords={[{lat: 52, lon: 23} ,{lat: 53, lon: 23}]} zoom={5}/>
        <Button > dfasdasd asd as das </Button>
        <VideoPlayer listSrc={['./']} />
        <Alert $variant='warning'>12312</Alert>
    </div>
)

HomePage.displayName = 'HomePage'

export default HomePage
