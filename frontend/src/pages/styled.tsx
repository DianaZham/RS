import styled from 'styled-components'

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
`

export const StyledPageRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing['sp-3']}px;

  & > * {
    flex: 1;
  }
`
