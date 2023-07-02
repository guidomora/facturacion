import { onAddPedido, onGetPedidos } from '@/store/slices/pedidosSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { collection, addDoc, DocumentData, Query, getDocs } from "firebase/firestore";
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


