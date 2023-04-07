import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'

const Layout: FC = () => (
    <div>
        <h1>Layout</h1>
        <Outlet/>
    </div>
)

Layout.displayName = 'Layout'

export default Layout
