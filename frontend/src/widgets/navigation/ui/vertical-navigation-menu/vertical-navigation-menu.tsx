import React, {FC} from 'react'
import {BsCalendarHeart, BsMap, BsTable} from 'react-icons/bs'
import {NavigationLink, StyledNavigationBlock, StyledVerticalNavigationMenu} from './styled'
import {Path} from '../../../../app'
import {UserInfoCard} from '../../../../entities/user'


const VerticalNavigationMenu: FC = () => {
    return (
        <StyledVerticalNavigationMenu>
            <UserInfoCard firstName="Alex" lastName="Kovalsky" email="aboba@yandex.ru" avatarURL="./"/>
            <StyledNavigationBlock>Навигация</StyledNavigationBlock>
            <NavigationLink
                to={Path.Registry}
            >
                <BsTable/> Реестр
            </NavigationLink>
            <NavigationLink
                to={Path.Map}
            ><BsMap/> Карта объектов
            </NavigationLink>
            <NavigationLink
                to={Path.Calendar}
            ><BsCalendarHeart/> Календарь событий
            </NavigationLink>
        </StyledVerticalNavigationMenu>
    )
}

VerticalNavigationMenu.displayName = 'VerticalNavigationMenu'

export default VerticalNavigationMenu
