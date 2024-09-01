import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getSchool, getstytem } from '../service/home';
// import { getBanners } from '../service/home';

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.data));
  });
  getSchool().then((res) => {
    dispatch(changeschoolAction(res.data));
  });
});
export const fetchHomeStystemDataAction = createAsyncThunk(
  'fetchdata',
  (params: string, { dispatch }) => {
    getstytem(params).then((res) => {
      dispatch(changestystemction(res.data));
    });
  }
);
interface HomelistState {
  bannerlist: any[];
  stystemlist: any[];
  schoollist: any[];
}
const initialState: HomelistState = {
  bannerlist: [],
  stystemlist: [],
  schoollist: []
};

const homelistSlice = createSlice({
  name: 'Homelist',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.bannerlist = payload;
    },
    changestystemction(state, { payload }) {
      state.stystemlist = payload;
    },
    changeschoolAction(state, { payload }) {
      state.schoollist = payload;
    }
  }
});
export const { changeBannersAction, changestystemction, changeschoolAction } =
  homelistSlice.actions;
export default homelistSlice.reducer;
