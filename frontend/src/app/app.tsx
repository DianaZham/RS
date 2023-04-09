import React, {FC} from 'react'
import {ApplicationTheme, GlobalStyles} from './styles'
import {RouterProvider} from 'react-router-dom'
import {router} from './routes'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'
import {store} from './store/store'

const App: FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={ApplicationTheme}>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    )
}

App.displayName = 'App'

export default App
