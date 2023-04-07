import React, {FC} from 'react'
import {Breadcrumbs, Tab, Tabs, Text} from '../../share'

const HomePage: FC = () => (
    <div>
        <Text $size="small">HomePage И что то на русском</Text>
        <Tabs>
            <Tab label="First">I think</Tab>
            <Tab label="Second">May be</Tab>
            <Tab label="Tertiary">Im stupid</Tab>
        </Tabs>
        <Breadcrumbs>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </Breadcrumbs>
    </div>
)

HomePage.displayName = 'HomePage'

export default HomePage
