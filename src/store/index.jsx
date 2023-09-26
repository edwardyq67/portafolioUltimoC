import { configureStore } from '@reduxjs/toolkit'
import  isLoading  from './slices/isLoading.slice'
import  conocimientoSlice  from './slices/conocimientos.slice'
import mensajeSlice from './slices/mensaje.slice'
export default configureStore({
    reducer: {
        isLoading:isLoading,
        conocimientoSlice:conocimientoSlice,
        mensajeSlice:mensajeSlice
    }
})
