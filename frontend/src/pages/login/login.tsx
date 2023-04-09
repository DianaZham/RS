import React, {FC} from 'react'
import {StyledBox, StyledLoginPage} from './styled'
import {PasswordField, SubmitButton, TextField} from '../../share'

const LoginPage: FC = () => (
    <StyledLoginPage>
        <form>
            <StyledBox $color="#bea7a74a">
                <TextField/>
                <PasswordField/>
                <SubmitButton value="Войти"/>
            </StyledBox>
        </form>
    </StyledLoginPage>
)

LoginPage.displayName = 'LoginPage'

export default LoginPage
