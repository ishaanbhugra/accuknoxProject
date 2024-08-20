


import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './components/dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard:dashboardReducer
  }
})
