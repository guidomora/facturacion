import { createSlice } from '@reduxjs/toolkit';




export const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState: {
        // El status de la app al iniciar
        pedidos:{
            
        }
    },
    reducers: {
        increment: (state, action) => {

        },
    }
});

// Action creators are generated for each case reducer function
export const { increment } = pedidosSlice.actions;

// fecha: "",
//             encargo: "",
//             recibe: "",
//             telefono: "",
//             direccion: "",
//             descripcion: ""