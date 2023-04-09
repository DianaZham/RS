import React, {FC, useEffect, useState} from 'react'

import {StyledPageRow, StyledPageWrapper} from '../styled'
import {Button} from "@mui/material";

type XmlType = {
    label:string
    url:string
}

//todo url константой
const XmlPage: FC = () => {
    const [state, setState] = useState<XmlType[]>([])
    //запросить с сервера список моделей по которым можно сформировать xml
    useEffect( ()=> {
        const f = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/otcheti/xml_model_lv/')
            const data = await response.json() as XmlType[]
            setState(data)
        }
        f()
         
    },[])
    return (
        <StyledPageWrapper>

            <StyledPageRow>
                <div>
                    {state.map((item, index)=>{
                        return(
                            <div key={index} >
                                <Button variant="text" href={item.url}>{item.label}({item.url})</Button>
                            </div>
                        )
                    })}
                </div>
            </StyledPageRow>
        </StyledPageWrapper>
    )
}

XmlPage.displayName = 'XmlPage'

export default XmlPage
