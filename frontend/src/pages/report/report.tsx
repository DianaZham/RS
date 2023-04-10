import React, {FC, useEffect, useState} from 'react'

import {StyledPageRow, StyledPageWrapper} from '../styled'
import {Button, Paper} from '@mui/material'


const ReportPage: FC = () => {

    return (
        <StyledPageWrapper>
            <StyledPageRow>
                <Paper sx={{display: 'd-block', gap: '1rem'}}>
                    <div>
                        <Button
                            variant="text"
                            color='warning'
                            href="http://127.0.0.1:8000/api/otcheti/render_povestka/"
                        >Повестка на сегодня
                        </Button>
                    </div>

                    <div>
                        <Button
                            variant="text"
                             target="_blank"
                            color='warning'
                            href="http://127.0.0.1:8000/api/otcheti/render_protocol_soglasovania/1/"
                        >Протокол согласования - не успели разместить там где надо. В карточке проекта =(
                        </Button>
                    </div>
                </Paper>
            </StyledPageRow>
        </StyledPageWrapper>
    )
}

ReportPage.displayName = 'ReportPage'

export default ReportPage
