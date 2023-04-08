import styled, {css} from 'styled-components'
import {Link} from '../../../../share'

type NavigationLinkProps = {
    $isActive?: boolean
}

export const StyledVerticalNavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => theme.spacing['sp-8']}px;
  gap: ${({theme}) => theme.spacing['sp-2']}px;
  box-shadow: ${({theme}) => theme.shadow.large};
  background: ${({theme}) => `linear-gradient(${theme.colors.primary.extraDark}, ${theme.colors.primary.dark}, ${theme.colors.secondary.extraLight})`};
`

export const NavigationLink = styled(Link)<NavigationLinkProps>`
  color: ${({theme, $isActive = false}) => $isActive ? theme.colors.notification.warning : theme.colors.neutral.white};

  &:hover {
    color: ${({theme}) => theme.colors.tertiary.extraDark};
  }

  ${({$isActive}) => $isActive && css`
    box-shadow: ${({theme}) => theme.shadow.large};
  `}
`
