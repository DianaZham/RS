import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import {Path} from './path'
import {GlobalLayout} from '../../pages'
import {RegistryPage} from '../../pages/registry'
import {MapPage} from '../../pages/map'
import {CalendarPage} from '../../pages/calendar'
import {LoginPage} from '../../pages/login'
import {ProjectPage} from '../../pages/project'
import {BuildingPage} from '../../pages/building'
import {AuthProvider} from '../auth'

export const router = createBrowserRouter([
    {
        path: Path.Registry,
        element: <AuthProvider><GlobalLayout/></AuthProvider>,
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
                path: Path.Project,
                element: <ProjectPage/>
            },
            {
                path: Path.Building,
                element: <BuildingPage/>
            }
        ]
    },
    {
        path: Path.Login,
        element: <LoginPage/>
    }
])
