import React, {FC} from 'react'
import {GlobalStyles} from './styles'
import {RouterProvider} from 'react-router-dom'
import {router} from './routes/router'

const App: FC = () => {
    return (
        <>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </>
    )
}

App.displayName = 'App'

export default App
