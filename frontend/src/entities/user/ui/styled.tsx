import styled from 'styled-components'
import {Text} from '../../../share'

export const StyledUserInfoCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-image: url("/assets/profile-bg.jpg");
  background-size: cover;
  background-position: center;
  gap: ${({theme}) => theme.spacing['sp-3']}px;
  padding: ${({theme}) => theme.spacing['sp-3']}px;

  & ${Text} {
    color: ${({theme}) => theme.colors.neutral.white};
  }

  ${Text} + ${Text} {
    margin-top: -${({theme}) => theme.spacing['sp-3']}px;
  }
}
`

export const StyledUserInfoCardImage = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 50px;
  max-height: 50px;
`
