import { AppState, onAddPedido, onGetPedidos } from '@/store/slices/pedidosSlice'
import React from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import { Pedidos } from '@/interfaces/pedidos';
import { AppDispatch, RootState } from '../store/store';


// useDispatch con TS
export const useAppDispatch = () => useDispatch<AppDispatch>()
// useSelector con TS 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const usePedidosStore = () => {
  const allpedidos = useAppSelector(state => state.pedidos.pedidos)
  const dispatch = useAppDispatch()
  

  // subir los pedidos a firebase
  const startAddingPedidos = async (pedido: Pedidos) => {
    const docRef = await addDoc(collection(db, "pedidos"), {
      ...pedido,
      fecha: new Date().toLocaleDateString(),
      numero: allpedidos.length + 1
    });
    dispatch(onAddPedido(pedido))
  }

  // subir los pedidos al estado
  const startSettingPedidos = async () => {
    const querySnapshot = await getDocs(collection(db, "pedidos"));
    const pedidos: any = []
    querySnapshot.forEach((doc) => {
      pedidos.push({
        ...doc.data(),
      });

      // Compara los numeros
      function compararDescendente(a:any, b:any) {
        return b.numero - a.numero;
      }
      // Ordena pedidos de mayor a menor
      pedidos.sort(compararDescendente);

      // // Ordena los pedidos por fecha, de la mas actual a la mas vieja
      // pedidos.sort((a:any, b:any) => {
      //   // Comparar las fechas en formato Date
      //   const dateA = new Date(a.fecha);
      //   const dateB = new Date(b.fecha);
      //   return dateB.getTime() - dateA.getTime();
      // });
    });
    dispatch(onGetPedidos(pedidos))
  }


  return {
    startAddingPedidos,
    startSettingPedidos
  }
}

export default usePedidosStore


