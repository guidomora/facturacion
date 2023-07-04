
import usePedidosStore, { useAppSelector } from '@/hooks/usePedidosStore';
import { Pedidos } from '@/interfaces/pedidos';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from '@mui/material';
import { Fragment, useEffect } from 'react';



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

const IndexTable = () => {
    const pedidos = useAppSelector(state => state.pedidos.pedidos)
    const { startSettingPedidos } = usePedidosStore()

    useEffect(() => {
        startSettingPedidos()
    }, [])


    return (
        <Grid container p={4}>
            {pedidos.map((pedido: Pedidos) => (
                <TableContainer component={Paper} sx={{ marginTop: 4 }} key={pedido.numero}>
                    <Typography fontWeight={"bold"}>Pedido: {pedido.numero}</Typography>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Fecha</StyledTableCell>
                                <StyledTableCell align="left">Encargo</StyledTableCell>
                                <StyledTableCell align="left">Recibe</StyledTableCell>
                                <StyledTableCell align="center">Telefono</StyledTableCell>
                                <StyledTableCell align="center">Direccion</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <Fragment key={pedido.encargo}>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">{pedido.fecha}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">{pedido.encargo}</StyledTableCell>
                                    <StyledTableCell align="left">{pedido.recibe}</StyledTableCell>
                                    <StyledTableCell align="center">{pedido.telefono}</StyledTableCell>
                                    <StyledTableCell align="center">{pedido.direccion}</StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell align="center">Descripcion:</StyledTableCell>
                                    <StyledTableCell>
                                        {pedido.descripcion}
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Fragment>
                    </Table>
                </TableContainer>
            ))}
        </Grid>
    )
}

export default IndexTable