import React, {FC} from 'react'
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material'

const BuildingDetail: FC = () => {
    return (
        <Box component="form" noValidate>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        color='warning'
                        name="typeObject"
                        required
                        fullWidth
                        id="firstName"
                        label="Тип объекта"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        color='warning'
                        fullWidth
                        required
                    >
                        <InputLabel id="subj-id">Тип субъекта</InputLabel>
                        <Select
                            labelId="subj-id"
                            label="typeSubject"
                        >
                            <MenuItem value={10}>Физическое лицо</MenuItem>
                            <MenuItem value={20}>Юридическое лицо</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        color="warning"
                        required
                        fullWidth
                        id="startDate"
                        name="startDate"
                        type="datetime-local"
                        label="Дата начала"
                        defaultValue="2017-05-24T10:30"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        color="warning"
                        required
                        fullWidth
                        name="square"
                        label="Площадь объекта"
                        type="number"
                        id="square"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        color="warning"
                        required
                        fullWidth
                        name="quality"
                        label="Состояние объекта"
                        type="text"
                        id="quality"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        color="warning"
                        required
                        fullWidth
                        name="address"
                        label="Адрес"
                        type="text"
                        id="address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Sign Up
            </Button>
        </Box>
    )
}

BuildingDetail.displayName = 'BuildingDetail'

export default BuildingDetail
