import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/greeting.json';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await fetch(url);
  const data = response.json();
  return data;
});

const initialState = {
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, { payload }) => ({
      ...state, greeting: payload.phrase,
    }));
  },

});

export default greetingSlice.reducer;
