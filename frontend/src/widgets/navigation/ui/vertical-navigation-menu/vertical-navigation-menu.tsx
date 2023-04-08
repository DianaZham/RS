import React, {FC} from 'react'
import {NavigationLink, StyledVerticalNavigationMenu} from './styled'
import {Path} from '../../../../app'
import {useMatches} from 'react-router-dom'

const isMatchPath = (paths: { pathname: string }[], path: string) => (paths.find(({pathname}) => pathname === path)) !== undefined

const VerticalNavigationMenu: FC = () => {

    const matches = useMatches()

    return (
        <StyledVerticalNavigationMenu>
            <NavigationLink to={Path.Home} $isActive={isMatchPath(matches, Path.Home)}>Home</NavigationLink>
            <NavigationLink to={Path.Other} $isActive={isMatchPath(matches, Path.Other)}>Other</NavigationLink>
        </StyledVerticalNavigationMenu>
    )
}

VerticalNavigationMenu.displayName = 'VerticalNavigationMenu'

export default VerticalNavigationMenu
