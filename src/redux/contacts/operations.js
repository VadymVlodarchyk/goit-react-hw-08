import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const taskWithNumber = { ...task, number: '-' };
      const { data } = await api.post('/contacts', taskWithNumber);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      await api.delete(`/contacts/${taskId}`);
      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
