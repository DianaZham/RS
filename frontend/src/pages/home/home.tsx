import React, {FC} from 'react'
import {Tab, Tabs, Text} from '../../share'

const HomePage: FC = () => (
    <div>
        <Text $size="small">HomePage И что то на русском</Text>
        <Tabs>
            <Tab label="First">I think</Tab>
            <Tab label="Second">May be</Tab>
            <Tab label="Tertiary">Im stupid</Tab>
        </Tabs>
    </div>
)

HomePage.displayName = 'HomePage'

export default HomePage
