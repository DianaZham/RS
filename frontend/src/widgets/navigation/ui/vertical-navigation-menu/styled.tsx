import styled from 'styled-components'
import {Link} from '../../../../share'


export const StyledVerticalNavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  min-height: 100vh;
  box-shadow: ${({theme}) => theme.shadow['large-2']};
  background: ${({theme}) => theme.colors.neutral.white};
`

export const NavigationLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  gap: ${({theme}) => theme.spacing['sp-2']}px;
  width: 100%;
  color: ${({theme}) => theme.colors.neutral.black};
  padding: ${({theme}) => theme.spacing['sp-1']}px 0;
  padding-left: ${({theme}) => theme.spacing['sp-3']}px;

  &:hover {
    color: ${({theme}) => theme.colors.tertiary.extraDark};
    background: ${({theme}) => theme.colors.neutral.grayLight};
  }

  &.active {
    color: ${({theme}) => theme.colors.tertiary.dark};
    box-shadow: ${({theme}) => theme.shadow.large};
  }

`

export const StyledNavigationBlock = styled.div`
  background: ${({theme}) => theme.colors.neutral.grayLight};
  color: ${({theme}) => theme.colors.neutral.black};
  width: 100%;
  text-align: center;
  padding: ${({theme}) => theme.spacing['sp-1']}px;
  margin-bottom: ${({theme}) => theme.spacing['sp-3']}px;
  font-size: ${({theme}) => theme.font.desktop['text-small'].size}px;
`
