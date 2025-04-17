import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api'; 

const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await api.post('/users/signup', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await api.post('/users/login', credentials); 
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout'); 
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await api.get('/users/current'); 
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
