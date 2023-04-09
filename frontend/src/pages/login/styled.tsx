import styled from 'styled-components'
import {Box} from '../../share'

export const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("/assets/profile-bg.jpg");
`

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
`
