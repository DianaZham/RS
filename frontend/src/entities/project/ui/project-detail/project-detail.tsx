import React, {FC, useRef} from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Tooltip
} from '@mui/material'
import {RegistryProject} from '../../../../widgets/registry/types'
import {MdOutlineNavigateNext} from 'react-icons/all'
import {Link} from '../../../../share'
import {Path, withoutSlug} from '../../../../app/routes'

type ProjectDetailProps = {
    project: RegistryProject
    onClickUpdate: (ref: React.MutableRefObject<HTMLFormElement | null>) => void
    onClickDelete: (ref: React.MutableRefObject<HTMLFormElement | null>) => void
}

const ProjectDetail: FC<ProjectDetailProps> = ({project, onClickDelete, onClickUpdate}) => {
    const formRef = useRef(null)
    return (
        <Box component="form" noValidate ref={formRef}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        color='warning'
                        name="vnutrinii_nomer"
                        required
                        fullWidth
                        id="number"
                        label="Номер"
                        type="text"
                        defaultValue={project.businessNumber}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        color='warning'
                        fullWidth
                        required
                    >
                        <InputLabel id="status">Статус</InputLabel>
                        <Select
                            labelId="status"
                            label="status"
                            defaultValue={project.status}
                        >
                            <MenuItem value="Новый">Новый</MenuItem>
                            <MenuItem value="В работе">В работе</MenuItem>
                            <MenuItem value="Завершен">Завершен</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        color="warning"
                        required
                        fullWidth
                        id="controlDate"
                        name="blizaishaia_data"
                        type="date"
                        label="Контрольная дата"
                        defaultValue={project.nextControlDate}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        InputLabelProps={{shrink: true}}
                        color="warning"
                        required
                        fullWidth
                        name="otvestvenie"
                        label="Ответственное лицо"
                        type="text"
                        id="accountable"
                        defaultValue={project.accountable.join(' / ')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        color="warning"
                        required
                        fullWidth
                        name="raioni"
                        label="Район"
                        type="text"
                        id="area"
                        defaultValue={project.constructionArea.join(' / ')}
                    />
                </Grid>
                {project.buildings.length > 0 && <Grid item xs={12}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                <TableCell>Адрес</TableCell>
                                <TableCell align="right">Тип объекта</TableCell>
                                <TableCell align="right">Состояние</TableCell>
                                <TableCell align="right">Площадь</TableCell>
                                <TableCell align="right">Владелец</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {project.buildings.map((building) => (
                                <TableRow
                                    key={building.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell>
                                        <Tooltip title="Перейти к строению">
                                            <Link
                                                to={`/${withoutSlug(Path.Building)}/${building.id}`}
                                            >
                                                <MdOutlineNavigateNext/>
                                            </Link>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {building.fullAddress}
                                    </TableCell>
                                    <TableCell align="right">{building.type}</TableCell>
                                    <TableCell align="right">{building.quality}</TableCell>
                                    <TableCell align="right">{building.square}</TableCell>
                                    <TableCell align="right">{building.owner}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>}
            </Grid>
            <ButtonGroup sx={{mt: 5}} variant="contained" color="warning" aria-label="outlined button group">
                <Button color="warning" onClick={() => onClickUpdate?.(formRef)}>Обновить данные</Button>
                <Button color="error" onClick={() => onClickDelete?.(formRef)}>Удалить проект</Button>
            </ButtonGroup>
        </Box>
    )
}

ProjectDetail.displayName = 'ProjectDetail'

export default ProjectDetail
