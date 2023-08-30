import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: []
}

const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);

        },
        updateTask: (state, action) => {
            state.tasks[action.payload.key].description = action.payload.description;
        },
        updateDone: (state, action) => {
            state.tasks[action.payload.key].isDone = action.payload.inDones;
        }

    }
})

export const { addTask, updateTask, updateDone } = TaskSlice.actions;
export default TaskSlice.reducer;