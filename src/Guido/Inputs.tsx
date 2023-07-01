import { Box, Button, Grid, TextField } from '@mui/material'
import React, { ChangeEvent, FormEventHandler, useState } from 'react'


const Inputs = () => {
    const [forms, setForms] = useState({
        numeroPedido: "", numeroFactura: "",
        detalle: "", precio: ""
    })

    const onFormChange = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForms((forms) => ({
            ...forms,
            [event.target.name]: event.target.value
        }))
    }

    const onChange: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(forms);
      };
      

    return (
        <Grid display={'flex'} sx={{ backgroundColor: "primary.main" }}>
            <form onSubmit={onChange}>
                <TextField value={forms.numeroPedido} name='numeroPedido' onChange={onFormChange}
                focused color="warning" sx={{ margin: 1 }} label="Número de pedido" />
                <TextField value={forms.numeroFactura} name='numeroFactura' onChange={onFormChange}
                focused color="warning" sx={{ margin: 1 }} label="Número de factura	" />
                <TextField value={forms.detalle} name='detalle' onChange={onFormChange}
                focused color="warning" sx={{ margin: 1 }} label="Detalle" />
                <TextField value={forms.precio} name='precio' onChange={onFormChange}
                focused color="warning" sx={{ margin: 1 }} label="Precio" />
                <Button color='error' type='submit'>Enviar</Button>
            </form>
        </Grid>

    )
}

export default Inputs