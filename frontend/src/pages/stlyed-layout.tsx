import styled from 'styled-components'

export const StyledLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

export const StyledContentWrapper = styled.div`
  padding: ${({theme}) => theme.spacing['sp-4']}px;
  box-shadow: ${({theme}) => theme.shadow.large};
`

