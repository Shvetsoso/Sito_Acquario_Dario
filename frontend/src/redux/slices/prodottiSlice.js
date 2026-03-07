import { createSlice } from "@reduxjs/toolkit";

export const prodottiSlice = createSlice({
    name: "prodotti",
    initialState: [],
    reducers: {

        setProdotti: (state, action) => {
           return action.payload
        },

        addProdotto: (state, action) => {
            state.push(action.payload)
        },

        removeProdotto: (state, action) => {
            state = state.filter((prodotto) => prodotto.id !== action.payload)
        }
    }
})

export const { setProdotti, addProdotto, removeProdotto } = prodottiSlice.actions

export default prodottiSlice.reducer