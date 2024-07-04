import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getstytem } from '../service/home';
// import { getBanners } from '../service/home';

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.data));
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
}
const initialState: HomelistState = {
  bannerlist: [],
  stystemlist: []
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
    }
    // changeimagelisAction(state, { payload }) {
    //   state.aboutimagelist = payload;
    // }
  }
});
export const { changeBannersAction, changestystemction } = homelistSlice.actions;
export default homelistSlice.reducer;
