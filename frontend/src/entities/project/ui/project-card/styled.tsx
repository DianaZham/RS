import styled from 'styled-components'
import {Box} from '../../../../share'

export const StyledProjectCard = styled(Box)`
  display: flex;
  cursor: pointer;
  
  & > * {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`
