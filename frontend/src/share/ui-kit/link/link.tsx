import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {BaseSizes} from '../../../app'

type LinkProps = {
    $size?: BaseSizes
}

const Link = styled(NavLink)<LinkProps>`
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme, $size = 'large'}) => theme.font.desktop[`text-${$size}`].size}px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.neutral.blackLight};
  
  &:hover {
    color: ${({theme}) => theme.colors.primary.dark};
  }
`

Link.displayName = 'Link'

export default Link
