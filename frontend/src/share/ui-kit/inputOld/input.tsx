import React, {FC} from 'react'
import StyledInput from './styledInput'
import StyledCheckbox from './styledCheckbox'

type InputProps = {
    name?: string
    type?: string,
    placeholder: string
}

const Input: FC<InputProps> = ({placeholder, type = 'text', name = 'name'}) => {
    switch (type) {
    case 'checkbox':
        return <div>
            <StyledCheckbox placeholder={placeholder}/>
        </div>
    case 'radio':
        return <StyledInput placeholder={placeholder}/>
    default:
        return <StyledInput name={name} placeholder={placeholder}/>
    }

}

export default Input
