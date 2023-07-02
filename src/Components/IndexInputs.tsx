import usePedidosStore from '@/hooks/usePedidosStore'
import { Box, Button, Grid, TextField } from '@mui/material'
import React, { ChangeEvent, FormEventHandler, useState } from 'react'



const IndexInputs = () => {
    const {startAddingPedidos} = usePedidosStore()
    const [forms, setForms] = useState({
        encargo: "",
        recibe: "",
        telefono: 0,
        direccion: "",
        descripcion: ""
    })

    const onFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForms((forms) => ({
            ...forms,
            [event.target.name]: event.target.value
        }))
    }

    const onChange: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        startAddingPedidos(forms)
    };


    return (
        <Grid sx={{ backgroundColor: "primary.main" }}>
            <form onSubmit={onChange}>
                <Grid display={'flex'} alignItems={"center"}>
                    <TextField value={forms.encargo} name='encargo' onChange={onFormChange}
                        focused color="warning" sx={{ margin: 1 }} label="Encargo" />
                    <TextField value={forms.recibe} name='recibe' onChange={onFormChange}
                        focused color="warning" sx={{ margin: 1 }} label="Recibe" />
                    <TextField value={forms.telefono} name='telefono' onChange={onFormChange}
                        focused color="warning" sx={{ margin: 1 }} label="Teléfono" />
                    <TextField value={forms.direccion} name='direccion' onChange={onFormChange}
                        focused color="warning" sx={{ margin: 1 }} label="Direccion" />
                    <TextField value={forms.descripcion} name='descripcion' onChange={onFormChange}
                        focused color="warning" sx={{ margin: 1 }} label="Descripcion" />
                    <Button variant='contained' color='warning' type='submit'>Enviar</Button>
                </Grid>
            </form>
        </Grid>

    )
}

export default IndexInputs