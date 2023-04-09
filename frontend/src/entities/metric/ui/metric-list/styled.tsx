import styled from 'styled-components'
import {Box, Subtitle} from '../../../../share'

export const StyledMetricList = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
`

export const StyledMetricListTitle = styled(Subtitle)`
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing['sp-3']}px;
`

export const StyledMetricListInner = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
`

export const StyledMetricListRow = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;

  & span:last-child {
    font-weight: bold;
  }
`
