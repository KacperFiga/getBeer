import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const defaultValue = {
  beer: {},
  isPending: false,
  requestID: null,
};

const URL = `https://api.punkapi.com/v2/beers/random`;

const getBeer = createAsyncThunk("beers/getBeers", async (props, thunkAPI) => {
  try {
    const { beer } = thunkAPI.getState();
    if (beer.requestID !== thunkAPI.requestId && beer.isPending) return;

    const result = await axios.get(URL);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithMessage(error);
  }
});

const resetInfoRequest = (state) => {
  state.isPending = false;
  state.isRequestID = null;
};

const beerSlice = createSlice({
  name: "beer",
  initialState: defaultValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBeer.pending, (state, action) => {
        if (state.isPending) return;
        state.isPending = true;
        state.requestID = action.meta.requestId;
      })
      .addCase(getBeer.rejected, (state, { error }) => {
        resetInfoRequest(state);

        console.error(error);
      })
      .addCase(getBeer.fulfilled, (state, { payload }) => {
        resetInfoRequest(state);
        if (!payload) return;

        const { data } = payload;

        state.beer = data[0];
      });
  },
});

export default beerSlice.reducer;
export { getBeer };
