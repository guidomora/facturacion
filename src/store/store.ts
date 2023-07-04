import { configureStore } from "@reduxjs/toolkit";
import { pedidosSlice } from "./slices/pedidosSlice";


export const store = configureStore({
    reducer: {
        pedidos:pedidosSlice.reducer
    },
  });


//   extrae los tipos de datos del State
  export type RootState = ReturnType<typeof store.getState>

//   extrae el tipo de dato de las funciones que podemos ejecutar
  export type AppDispatch =  typeof store.dispatch