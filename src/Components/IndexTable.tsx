import Layout from '@/Layout/Layout'
import usePedidosStore from '@/hooks/usePedidosStore';
import { Pedidos } from '@/interfaces/pedidos';
import { AppState } from '@/store/slices/pedidosSlice';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


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
    const pedidos = useSelector((state:AppState) => state.pedidos)
    const {startSettingPedidos} = usePedidosStore()

    useEffect(() => {
        startSettingPedidos()
    }, [])
    
    console.log(pedidos);
    
    
    return (
        <Grid p={4}>
            <Typography fontWeight={"bold"}>Numero: 200</Typography>
            <TableContainer component={Paper}>
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
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">1/7/2023</StyledTableCell>
                            <StyledTableCell align="left">Corona</StyledTableCell>
                            <StyledTableCell align="left">XxxxxxX</StyledTableCell>
                            <StyledTableCell align="center">1122334455</StyledTableCell>
                            <StyledTableCell align="center">Forest 906</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell align="center">Descripcion:</StyledTableCell>
                            <StyledTableCell>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni molestias provident aut corrupti amet dolorem,
                                rem possimus assumenda iste, repellendus illo, architecto porro sequi sint. Perspiciatis suscipit quod assumenda!
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default IndexTable