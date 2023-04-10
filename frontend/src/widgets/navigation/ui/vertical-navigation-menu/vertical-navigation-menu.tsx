import React, {FC} from 'react'
import {BsCalendarHeart, BsFileExcel, BsFiletypeXml, BsMap, BsTable, BsTools} from 'react-icons/bs'
import {NavigationLink, StyledNavigationBlock, StyledVerticalNavigationMenu} from './styled'
import {Path} from '../../../../app'
import {UserInfoCard} from '../../../../entities/user'


const VerticalNavigationMenu: FC = () => {
    return (
        <StyledVerticalNavigationMenu>
            <UserInfoCard firstName="Admin" lastName="Kovalsky"/>
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
            <NavigationLink
                to={Path.XML}
            ><BsFiletypeXml/> XML api/экспорт
            </NavigationLink>
            <NavigationLink
                to={Path.Report}
            ><BsFileExcel/> Отчеты
            </NavigationLink>
            
            <NavigationLink
                target="_blank"
                to='http://127.0.0.1:8000/admin/'
            ><BsTools/> Админка(бек есть, фронт чуть не успели)
            </NavigationLink>
        
        </StyledVerticalNavigationMenu>
    )
}

VerticalNavigationMenu.displayName = 'VerticalNavigationMenu'

export default VerticalNavigationMenu
