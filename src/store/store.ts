import { configureStore } from "@reduxjs/toolkit";
import { pedidosSlice } from "./slices/pedidosSlice";

export const store = configureStore({
    reducer: {
        pedidos:pedidosSlice.reducer
    },
  });