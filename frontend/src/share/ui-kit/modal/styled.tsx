import styled from 'styled-components'
import {Box} from '../box'

export const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModalContent = styled(Box)`
  min-width: 90vw;
  min-height: 90vh;
  overflow-y: scroll;
`

