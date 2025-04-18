import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask } from './operations'; 
import { logout } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => { 
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => { 
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => { 
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
