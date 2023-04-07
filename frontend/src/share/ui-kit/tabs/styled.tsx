import styled from 'styled-components'
import {Text} from '../typography'

type StyledLabelProps = {
    $isActive: boolean
}

type StyledContentProps = {
    $isVisible: boolean
}

export const StyledTabsHeader = styled.div`
  background: ${({theme}) => theme.colors.primary.light};
`

export const StyledLabelWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing['sp-2']}px;
`

export const StyledLabel = styled(Text)<StyledLabelProps>`
  color: ${({theme, $isActive}) => $isActive ? theme.colors.secondary.dark : theme.colors.neutral.white};
  padding: ${({theme}) => theme.spacing['sp-2']}px;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const StyledContentContainer = styled.div`
  position: relative;
`

export const StyledContent = styled.div<StyledContentProps>`
  position: ${({$isVisible}) => $isVisible ? 'relative' : 'absolute'};;
  visibility: ${({$isVisible}) => $isVisible ? 'visible' : 'hidden'};
`

export const StyledTabs = styled.div``
