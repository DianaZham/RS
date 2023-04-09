import React, {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'

const CollapsibleTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows.map((row) => (*/}
                    {/*    <Row key={row.name} row={row} />*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

CollapsibleTable.displayName = 'CollapsibleTable'

export default CollapsibleTable
