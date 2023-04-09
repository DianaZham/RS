import React, {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {RegistryProjectCard} from '../registry-project-card'
import {ControlDate, Project} from '../../../../entities/project'

type RegistryTableProject = Project & { nextControlDate: ControlDate }

const projects: RegistryTableProject[] = [
    {
        id: 1,
        nextControlDate: {date: new Date(), description: 'adsfadf'},
        controlDates: [],
        accountable: 'Пупкин',
        number: '12371/8',
        status: 'В работе',
        constructionArea: 'Можельский район',
        buildings: [
            {
                id: 1,
                type: 'Памятник',
                square: 244,
                address: 'пупкинская 64',
                owner: 'Пупкин',
                quality: 'Жилой памятник, для голубей',
                numFloors: 9999
            },
            {
                id: 2,
                type: 'Жилой дом',
                square: 12,
                address: 'пупкинская 6',
                owner: 'Пупкин',
                quality: 'Для студента не сойдет',
                numFloors: 9999
            }
        ]
    }
]

const RegistryTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Номер</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right">Район строительства</TableCell>
                        <TableCell align="right">Ближайшая контрольная дата</TableCell>
                        <TableCell align="right">Ответственный</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map(project => (
                        <RegistryProjectCard key={project.id} project={project}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


RegistryTable.displayName = 'RegistryTable'

export default RegistryTable
