import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../features/charts/chartsSlice';

const store = configureStore({
  reducer: {
    charts: chartsReducer,
  },
});

export default store;
