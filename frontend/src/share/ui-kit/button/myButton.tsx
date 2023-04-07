import React, { FC } from 'react'
import { StyledButton } from './myButton-style'

const MyButton: FC<{children: string}> = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

MyButton.displayName = 'MyButton'
export default MyButton