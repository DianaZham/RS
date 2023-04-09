import styled from 'styled-components'
import {Box, Subtitle} from '../../../../share'

export const StyledDiagramMetricCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledDiagramMetricCardTitle = styled(Subtitle)`
  font-weight: bold;
`

export const StyledDiagramMetricCardInner = styled.div`
  max-width: 300px;
  max-height: 300px;
`
