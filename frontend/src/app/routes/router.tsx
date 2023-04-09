import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import {Path} from './path'
import {GlobalLayout} from '../../pages'
import {RegistryPage} from '../../pages/registry'
import {MapPage} from '../../pages/map'
import {CalendarPage} from '../../pages/calendar'
import {LoginPage} from '../../pages/login'
import {XmlPage} from '../../pages/xml'

export const router = createBrowserRouter([
    {
        path: Path.Registry,
        element: <GlobalLayout/>,
        children: [
            {
                path: Path.Registry,
                element: <RegistryPage/>
            },
            {
                path: Path.Map,
                element: <MapPage/>
            },
            {
                path: Path.Calendar,
                element: <CalendarPage/>
            },
            {
                path: Path.XML,
                element: <XmlPage/>
            }
        ]
    },
    {
        path: Path.Login,
        element: <LoginPage/>
    }
])
