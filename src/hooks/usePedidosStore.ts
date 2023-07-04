import { onAddPedido, onGetPedidos } from '@/store/slices/pedidosSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { collection, addDoc, DocumentData, Query, getDocs, orderBy, } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import { Pedidos } from '@/interfaces/pedidos';





const usePedidosStore = () => {
  const dispatch = useDispatch()

  const startAddingPedidos = async (pedido: Pedidos) => {

    const docRef = await addDoc(collection(db, "pedidos"), {
      ...pedido,
      fecha: new Date().toLocaleDateString()
    });
    dispatch(onAddPedido(pedido))
  }

  const startSettingPedidos = async () => {
    const querySnapshot = await getDocs(collection(db, "pedidos"));
    const pedidos: any = []
    querySnapshot.forEach((doc) => {
      pedidos.push({
        ...doc.data(),
        fecha: new Date(Date.parse(doc.data().fecha)).toLocaleDateString()
      });
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


