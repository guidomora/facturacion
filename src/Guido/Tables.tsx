
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip, Grid } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('25/6/23', 159, 6.0, 24, 4.0),
    createData('26/6/23', 237, 9.0, 37, 4.3),
    createData('27/6/23', 262, 16.0, 24, 6.0),
    createData('28/6/23', 305, 3.7, 67, 4.3),
    createData('29/6/23', 356, 16.0, 49, 3.9),
];





export default function Tables() {


    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Fecha</StyledTableCell>
                            <StyledTableCell align="center">Número de pedido</StyledTableCell>
                            <StyledTableCell align="center">Número de factura</StyledTableCell>
                            <StyledTableCell align="center">Detalle</StyledTableCell>
                            <StyledTableCell align="center">Precio</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell align="center">{row.fat}G</StyledTableCell>
                                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="center">${row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid display={'flex'} justifyContent={'flex-end'}>
                <Chip color="success" size="medium" label={`Disponible: $416000`}
                    sx={{ marginTop: 2 , marginRight:1, fontSize: 16 }} />
            </Grid>
        </Grid>

    );
}