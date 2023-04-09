import React, {FC} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {StyledContentWrapper, StyledLayoutWrapper} from './stlyed-layout'
import {VerticalNavigationMenu} from '../widgets/navigation'
import {useAuth} from '../app/auth'
import {Path} from '../app'

const Layout: FC = () => {
    
    const user = useAuth()
    
    if (!user) {
        return <Navigate to={Path.Login}/>
    }
    
    return (
        <StyledLayoutWrapper>
            <VerticalNavigationMenu/>
            <StyledContentWrapper>
                <Outlet/>
            </StyledContentWrapper>
        </StyledLayoutWrapper>
    )
}


Layout.displayName = 'Layout'

export default Layout
