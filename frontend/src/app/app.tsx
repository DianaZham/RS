import React, {FC} from 'react'
import {GlobalStyles} from './styles'
import {RouterProvider} from 'react-router-dom'
import {router} from './routes'
import {ThemeProvider} from 'styled-components'
import {ApplicationTheme} from './styles'


const App: FC = () => {
    return (
        <>
            <ThemeProvider theme={ApplicationTheme}>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}

App.displayName = 'App'

export default App
