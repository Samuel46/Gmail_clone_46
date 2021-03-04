import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/userSlice';
import mailReducer from '../features/mailSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: useReducer
  },
  
});
