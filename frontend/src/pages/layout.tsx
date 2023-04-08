import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {StyledContentWrapper, StyledLayoutWrapper} from './stlyed-layout'
import {VerticalNavigationMenu} from '../widgets/navigation'

const Layout: FC = () => (
    <StyledLayoutWrapper>
        <VerticalNavigationMenu/>
        <StyledContentWrapper>
            <Outlet/>
        </StyledContentWrapper>
    </StyledLayoutWrapper>
)


Layout.displayName = 'Layout'

export default Layout
