import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './TaskSlice/TaskSlice';
const store = configureStore({
    
    reducer: {
        tasks: taskReducer,
    },
    
})

export default store;