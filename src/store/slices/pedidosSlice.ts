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
    id:string
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
      id?:string
    }[],
    modalOpen: false
  },
  reducers: {
    onAddPedido: (state, { payload }: PayloadAction<Pedidos>) => {
      state.pedidos = [...state.pedidos, payload];
    },

    onGetPedidos: (state, { payload }) => {
      state.pedidos = payload
    },

    onSetModal: (state, {payload}) => {
      state.modalOpen = payload
    },

    onUpdatePedido: (state, {payload}) => {
      state.pedidos = state.pedidos.map((pedido) => {
        if (pedido.id === payload.id) {
          return payload
        }
        return pedido
      })
    }

  }
});

export const { onAddPedido, onGetPedidos, onSetModal } = pedidosSlice.actions;
