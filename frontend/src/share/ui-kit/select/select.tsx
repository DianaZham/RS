import React, {FC} from 'react'
import {default as StyledSelect} from 'react-select'

type Option = {
    value: string, 
    label: string,
}

type SelectProps = {
    defaultValue?: Option,
    options: Option[],
    placeholder?: string,
    isSearchable?: boolean, 
    isDisabled?: boolean,
}


const Select: FC<SelectProps> = ({
    defaultValue, 
    options, 
    placeholder, 
    isSearchable,
    isDisabled
}) => {
    return <StyledSelect
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        placeholder={placeholder}
        defaultValue={defaultValue}
        options={options} 
        theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            colors: {
                ...theme.colors,
                primary25: '#0E91EF1A',
                primary: '#0B83D9',
            }
        })}
    />
}

Select.displayName = 'Select'
export default Select
