import React, {FC, useEffect, useState} from 'react'

import {StyledPageRow, StyledPageWrapper} from '../styled'
import {Button, Paper} from '@mui/material'

type XmlType = {
    label: string
    url: string
}

const XmlPage: FC = () => {
    const [state, setState] = useState<XmlType[]>([{label: '1231231', url: '12312312312'}, {
        label: '1231231',
        url: '12312312312'
    }])
    
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/otcheti/xml_model_lv/')
            const data = await response.json() as XmlType[]
            setState(data)
        }
        
        void fetchData()
        
    }, [])
    return (
        <StyledPageWrapper>
            <StyledPageRow>
                <Paper sx={{display: 'flex', gap: '1rem'}}>
                    {state.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                variant="outlined"
                                color='warning'
                                href={item.url}
                            >{item.label}({item.url})
                            </Button>
                        )
                    })}
                </Paper>
            </StyledPageRow>
        </StyledPageWrapper>
    )
}

XmlPage.displayName = 'XmlPage'

export default XmlPage
