

import React, { FC } from 'react'
import StyledLabel from './styledLabel'
import styled from 'styled-components'

const Checkbox = styled.input.attrs({ type: 'checkbox' })``

const StyledDiv = styled.label`
    align-items: center;
    display: flex;
    gap: ${({theme}) => theme.spacing['sp-2']}px;
    margin-bottom: ${({theme}) => theme.spacing['sp-2']}px;

    &:hover span {
        color: ${({theme}) => theme.colors.primary.light};
    }

    &:active span {
        color: ${({theme}) => theme.colors.neutral.black};
    }
`


type StyledCheckboxProps = {
    placeholder: string
}

const StyledCheckbox: FC<StyledCheckboxProps> = ({placeholder}) => {

    return <StyledDiv>
        <Checkbox/>
        <StyledLabel>{placeholder}</StyledLabel>
    </StyledDiv>
}

export default StyledCheckbox
