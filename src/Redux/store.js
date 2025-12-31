import { configureStore } from '@reduxjs/toolkit'
import patientReducer from './features/patient'

export const store = configureStore({
  reducer: {
    patient: patientReducer,

  },
})