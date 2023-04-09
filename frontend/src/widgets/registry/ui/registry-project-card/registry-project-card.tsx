import {Box as MUIBox, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import React, {FC, useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {Headline} from '../../../../share'
import {ControlDate, Project} from '../../../../entities/project'

type RowType = {
    project: Project & { nextControlDate: ControlDate }
}

const RegistryProjectCard: FC<RowType> = ({
    project
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
                        {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{project.number}</TableCell>
                <TableCell align="right">{project.status}</TableCell>
                <TableCell align="right">{project.constructionArea}</TableCell>
                <TableCell align="right">{project.nextControlDate.date.toDateString()}</TableCell>
                <TableCell align="right">{project.accountable}</TableCell>
            </TableRow>
            
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <MUIBox sx={{margin: 1}}>
                            <Headline $size="small">Объекты проекта: </Headline>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Улица</TableCell>
                                        <TableCell>Площадь</TableCell>
                                        <TableCell align="right">Вид объекта</TableCell>
                                        <TableCell align="right">Состояние дома</TableCell>
                                        <TableCell align="right">Владелец здания</TableCell>
                                    </TableRow>
                                </TableHead>
                                
                                <TableBody>
                                    {project.buildings.map((building) => (
                                        <TableRow key={building.id}>
                                            <TableCell>{building.address}</TableCell>
                                            <TableCell>{building.square}</TableCell>
                                            <TableCell align="right">{building.type}</TableCell>
                                            <TableCell align="right">{building.quality}</TableCell>
                                            <TableCell align="right">{building.owner}</TableCell>
                                        </TableRow>
                                    ))}
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

