import styled from 'styled-components'
import {Box, Subtitle, Text} from '../../../../share'


export const StyledIconMetricCard = styled(Box)`
  display: flex;
  gap: ${({theme}) => theme.spacing['sp-2']}px;
  overflow: hidden;
`

export const StyledIconMetricCardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 73px;
  margin: -${({theme}) => theme.spacing['sp-3']}px;
  margin-right: ${({theme}) => theme.spacing['sp-3']}px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0 0 0 / 5%);
  }
`

export const StyledIconMetricCardTextWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const StyledIconMetricCardTitle = styled(Subtitle)`
  font-weight: bold;
`

export const StyledIconMetricCardText = styled(Text)`
  font-weight: bold;
`
