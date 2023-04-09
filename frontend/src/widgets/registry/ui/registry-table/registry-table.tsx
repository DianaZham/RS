import React, {useEffect, useState} from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {getAllProjects} from '../../../../entities/project/api'
import {RegistryProject} from '../../types'
import {toRegistryProject} from '../../model'
import {RegistryProjectCard} from '../registry-project-card'

type RegistryTableProject = RegistryProject[]

const RegistryTable = () => {
    
    const [projects, setProjects] = useState<RegistryTableProject>([])
    
    useEffect(() => {
        (async () => {
            const data = await getAllProjects()
            setProjects(data.map(toRegistryProject))
        })()
        
    }, [])
    
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
