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
    const onCloseModal = () => {

    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Typography variant="h4"> Editar pedido </Typography>
            <hr />
            <form className="container">

                <Grid className="form-group mb-2">
                    <TextField label="Fecha" />
                </Grid>
                <Grid className="form-group mb-2">
                    <TextField label="Encargo" />
                </Grid>
                <Grid className="form-group mb-2">
                    <TextField label="Recibe" />
                </Grid>
                <Grid className="form-group mb-2">
                    <TextField label="Telefono" />
                </Grid>
                <Grid className="form-group mb-2">
                    <TextField label="Direccion" />
                </Grid>
                <Grid className="form-group mb-2">
                    <TextField label="Descripccion" />
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