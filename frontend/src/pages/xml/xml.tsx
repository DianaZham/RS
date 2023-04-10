import React, {FC, useEffect, useState} from 'react'

import {StyledPageRow, StyledPageWrapper} from '../styled'
import {Button, Paper} from '@mui/material'

type XmlType = {
    label: string
    url: string
}

const XmlPage: FC = () => {
    const [state, setState] = useState<XmlType[]>([])


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
                <Paper sx={{display: 'block', gap: '1rem'}}>
                    {state.map((item, index) => {
                        return (
                            <div key={index} >
                                <Button
                                    target="_blank"
                                    variant="text"
                                    color='warning'
                                    href={item.url}
                                >{item.label}({item.url})
                                </Button>

                            </div>
                        )
                    })}
                </Paper>
            </StyledPageRow>
        </StyledPageWrapper>
    )
}

XmlPage.displayName = 'XmlPage'

export default XmlPage
