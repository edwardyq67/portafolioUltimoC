import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const mensajeSlice = createSlice({
    name: 'mensaje',
    initialState: [],
    reducers: {
        setMensaje:(state,action)=>{
            const Mensaje=action.payload
            return Mensaje
        }
    }
})
export const thunkEnvio = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://api-ropa1-uwg9-dev.fl0.io/email',data)
        .then(() => dispatch(setMensaje()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const {setMensaje  } = mensajeSlice.actions;

export default mensajeSlice.reducer;
