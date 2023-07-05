import useModalStore from '@/hooks/useModalStore';
import { useAppSelector } from '@/hooks/usePedidosStore';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { FC } from 'react'
import Modal from "react-modal"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement("body");



const ModalComponent = () => {
    const { modalOpen } = useAppSelector((state) => state.pedidos)
    const { setCloseModal } = useModalStore()


    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={setCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Typography variant="h4"> Editar pedido </Typography>
            <hr />
            <form className='modal'>
                <Grid display={'flex'}>
                    <Grid mt={2} mb={2} mr={5}>
                        <TextField label="Fecha" />
                    </Grid>
                    <Grid mt={2} mb={2}>
                        <TextField label="Encargo" />
                    </Grid>
                </Grid>
                <Grid display={'flex'} flexDirection={'row'} alignContent={"center"} mb={2}>
                    <Grid mr={5}>
                        <Grid  mb={2}>
                            <TextField label="Recibe" />
                        </Grid>
                        <Grid mt={1} mb={2}>
                            <TextField label="Telefono" />
                        </Grid>
                        <Grid mt={1}>
                            <TextField label="Direccion" />
                        </Grid>
                    </Grid>
                    <Grid width={500}>
                        <TextField label="Descripccion" rows={7} fullWidth multiline/>
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                >
                    <span> Guardar</span>
                </Button>

            </form>
        </Modal>
    )
}

export default ModalComponent