import {Box as MUIBox, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import React, {FC, useState} from 'react'
import {Text} from '../../../../share'

type RowData = {
    field: number | string
}

const RegistryProjectCard: FC<RowData> = ({
    field
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? '-' : '+'}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {field}
                </TableCell>
                <TableCell align="right">{field}</TableCell>
                <TableCell align="right">{field}</TableCell>
                <TableCell align="right">{field}</TableCell>
                <TableCell align="right">{field}</TableCell>
            </TableRow>
            
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <MUIBox sx={{margin: 1}}>
                            <Text>
                                History
                            </Text>
                            
                            <Table size="small" aria-label="purchases">
                                
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                    
                                    {/*{row.history.map((historyRow) => (*/}
                                    {/*    <TableRow key={historyRow.date}>*/}
                                    {/*        <TableCell component="th" scope="row">*/}
                                    {/*            {historyRow.date}*/}
                                    {/*        </TableCell>*/}
                                    {/*        <TableCell>{historyRow.customerId}</TableCell>*/}
                                    {/*        <TableCell align="right">{historyRow.amount}</TableCell>*/}
                                    {/*        <TableCell align="right">*/}
                                    {/*            {Math.round(historyRow.amount * row.price * 100) / 100}*/}
                                    {/*        </TableCell>*/}
                                    {/*    </TableRow>*/}
                                    {/*))}*/}
                                
                                </TableBody>
                            </Table>
                        </MUIBox>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

RegistryProjectCard.displayName = 'RegistryProjectCard'

export default RegistryProjectCard

