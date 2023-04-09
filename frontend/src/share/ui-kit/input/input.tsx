import styled from 'styled-components'

const StyledInput = styled.input`
  padding: ${({theme}) => theme.spacing['sp-1']}px;
  font-family: ${({theme}) => theme.font.family};
`

export const TextField = styled(StyledInput).attrs({
    type: 'text',
})``

export const PasswordField = styled(StyledInput).attrs({
    type: 'password'
})``

export const SubmitButton = styled(StyledInput).attrs({
    type: 'submit'
})`
  background: rgba(0 0 0 / 30%);
  color: white;
`
