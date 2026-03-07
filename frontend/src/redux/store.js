import { configureStore } from '@reduxjs/toolkit'
import  prodottiSlice from './slices/prodottiSlice'

export const store = configureStore({
  reducer: {
    prodotti: prodottiSlice
  }
})