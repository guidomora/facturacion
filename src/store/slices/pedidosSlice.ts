import { Pedidos } from '@/interfaces/pedidos';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface AppState {
  pedidos: {
    encargo: string;
    recibe: string;
    telefono: number;
    direccion: string;
    descripcion: string;
    fecha?: Date
  }[];
}


export const pedidosSlice = createSlice({
  name: 'pedidos',
  initialState: {
    pedidos: [] as {
      encargo: string;
      recibe: string;
      telefono: number;
      direccion: string;
      descripcion: string;
      fecha?: Date
    }[]
  },
  reducers: {
    onAddPedido: (state, { payload }: PayloadAction<Pedidos>) => {
      state.pedidos = [...state.pedidos, payload];
    },

    onGetPedidos: (state, { payload }) => {
      state.pedidos = payload
    }
  }
});

export const { onAddPedido, onGetPedidos } = pedidosSlice.actions;

// fecha: "",
//             encargo: "",
//             recibe: "",
//             telefono: "",
//             direccion: "",
//             descripcion: ""