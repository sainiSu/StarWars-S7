import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ships: [],
  status: 'idle',
  error: null,
};

export const fetchShips = createAsyncThunk('ships/fetchShips', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/');
  return response.data.results;
});

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchShips.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchShips.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ships = action.payload;
      })
      .addCase(fetchShips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default shipsSlice.reducer;
