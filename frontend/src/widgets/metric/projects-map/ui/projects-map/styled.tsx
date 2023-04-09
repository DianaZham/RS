import styled from 'styled-components'
import {Map} from '../../../../../share'

export const StyledProjectsMap = styled(Map)`
  height: 500px;
  width: calc(100% - 1px);
`

export const StyledProjectMapCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
`
