import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import {Path} from './path'
import {GlobalLayout} from '../../pages'
import {HomePage} from '../../pages/home'

export const router = createBrowserRouter([
    {
        path: Path.Home,
        element: <GlobalLayout/>,
        children: [{
            path: Path.Home,
            element: <HomePage/>
        }]
    }
])
