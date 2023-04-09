/* eslint-disable react/jsx-key */
import React, {FC} from 'react'
import {Column, useSortBy, useTable} from 'react-table'
import {StyledTable} from './styled'
import {Box, Link} from '../../../../../share'

interface Building {
    id: number
    address: string
    numFloors: number
    square: number
}

const columns: Column<Building>[] = [
    {
        Header: 'Номер проекта',
        accessor: 'id',
        sortType: 'number',
        Cell: ({row}) => (<Link to="/">{row.original.id}</Link>),
    },
    {
        Header: 'Адрес',
        accessor: 'address',
        sortType: 'string'
    },
    {
        Header: 'Количество этажей',
        accessor: 'numFloors',
        sortType: 'number'
    },
    {
        Header: 'Площадь',
        accessor: 'square',
        sortType: 'number'
    }
]

const data: Building[] = [
    {id: 123123, address: 'ул. Чкалова, 123', numFloors: 5, square: 172},
    {id: 123231, address: 'ул. Бутина, 12', numFloors: 4, square: 193},
    {id: 582312, address: 'ул. Валовская, 78', numFloors: 4, square: 121},
    {id: 375241, address: 'ул. Бабушкина, 64', numFloors: 3, square: 342},
    {id: 513513, address: 'ул. Ленина, 28', numFloors: 6, square: 432},
    {id: 324952, address: 'ул. Сибирская, 118', numFloors: 7, square: 422},
]

const ProjectsRegistryTable: FC = () => {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data}, useSortBy)


    return (
        <Box $color="rgb(247, 248, 250)">
            <StyledTable {...getTableProps()}>
                <thead>
                    {headerGroups.map(hg => (
                        <tr {...hg.getHeaderGroupProps()}>
                            {hg.headers.map(col => (
                                <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                                    {col.render('Header')}
                                    {col.isSorted
                                        ? col.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)

                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </StyledTable>
        </Box>
    )
}

ProjectsRegistryTable.displayName = 'ProjectsRegistryTable'

export default ProjectsRegistryTable
