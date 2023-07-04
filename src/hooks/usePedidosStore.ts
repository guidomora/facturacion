import { AppState, onAddPedido, onGetPedidos } from '@/store/slices/pedidosSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collection, addDoc, DocumentData, Query, getDocs, orderBy, } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import { Pedidos } from '@/interfaces/pedidos';





const usePedidosStore = () => {
  const pedidosState = useSelector((state:AppState) => state.pedidos)
  const dispatch = useDispatch()

  

  // subir los pedidos a firebase
  const startAddingPedidos = async (pedido: Pedidos) => {
    const docRef = await addDoc(collection(db, "pedidos"), {
      ...pedido,
      fecha: new Date().toLocaleDateString()
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

      // Ordena los pedidos por fecha, de la mas actual a la mas vieja
      pedidos.sort((a:any, b:any) => {
        // Comparar las fechas en formato Date
        const dateA = new Date(a.fecha);
        const dateB = new Date(b.fecha);
        return dateB.getTime() - dateA.getTime();
      });
    });
    dispatch(onGetPedidos(pedidos))
  }


  return {
    startAddingPedidos,
    startSettingPedidos
  }
}

export default usePedidosStore


