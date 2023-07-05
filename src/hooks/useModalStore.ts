import React from 'react'
import { useAppDispatch } from './usePedidosStore'
import { onSetModal } from '@/store/slices/pedidosSlice'

const useModalStore = () => {
  const dispatch = useAppDispatch()
  
    const setOpenModal = () => {
        dispatch(onSetModal(true))
    }

    const setCloseModal = () => {
        dispatch(onSetModal(false))
    }
  
    return {
        setOpenModal,
        setCloseModal
  }
}

export default useModalStore