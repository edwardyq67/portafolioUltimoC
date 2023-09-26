import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const conocimientoSlice = createSlice({
    name: 'conocimiento',
    initialState: [],
    reducers: {
        setConocimiento:(state,action)=>{
            const Conocimiento=action.payload
            return Conocimiento
        }
    }
})
export const getConocimiento = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://api-ropa1-uwg9-dev.fl0.io/portafolio/lenguaje')
        .then((res) => dispatch(setConocimiento(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setConocimiento } = conocimientoSlice.actions;

export default conocimientoSlice.reducer;
