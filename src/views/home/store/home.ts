import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/home';

export const fetchRecommendDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.data.bannerlist));
    dispatch(changeaboutAction(res.data.aboutlist));
    dispatch(changewaiterAction(res.data.waiterlist));
    dispatch(changeimagelisAction(res.data.aboutimagelist));
  });
});

interface HomelistState {
  bannerlist: any[];
  aboutlist: any[];
  aboutimagelist: any[];
  waiterlist: any[];
}
const initialState: HomelistState = {
  bannerlist: [],
  aboutlist: [],
  aboutimagelist: [],
  waiterlist: []
};

const homelistSlice = createSlice({
  name: 'Homelist',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.bannerlist = payload;
    },
    changeaboutAction(state, { payload }) {
      state.aboutlist = payload;
    },
    changewaiterAction(state, { payload }) {
      state.waiterlist = payload;
    },
    changeimagelisAction(state, { payload }) {
      state.aboutimagelist = payload;
    }
  }
});
export const { changeBannersAction, changeaboutAction, changewaiterAction, changeimagelisAction } =
  homelistSlice.actions;
export default homelistSlice.reducer;
